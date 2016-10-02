import { AsyncStorage } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
const DOMParser = require('xmldom').DOMParser;

const STATE = {
    rokus: [],
    selectedId: 'http://10.0.0.8:8060/',
    device: {},
    hotButtonIds: [12, 13, 46041, 2285]
};

const STORAGE_KEY = '@RokuRemote:key';

export const getDeviceInfo = async (url) => fetch(`${url}query/device-info`, { method: 'GET' })
        .then(res => res.text())
        .then(xml => xml ? parseDeviceInfoResponse(xml) : xml);

export const parseDeviceInfoResponse = (xml) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml);
    const specs = xmlDoc.getElementsByTagName('device-info')[0].childNodes;
    const onlyElements = [];
    for(let i = 0; i < specs.length; i++) {
        if(specs[i].tagName) {
            onlyElements.push(specs[i]);
        }
    }

    return onlyElements.reduce((deviceInfo, node) => {
        deviceInfo[node.tagName] = node.childNodes[0] ? node.childNodes[0].data : '';
        return deviceInfo
    }, {});
};

export const parseAppsResponse = (xml) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml);
    const appTag = xmlDoc.getElementsByTagName('app');
    const channels = [];
    for(var i = 0; i < appTag.length; i++){
        const app = appTag[i];
        const rokuApp = { name: app.childNodes[0].nodeValue };
        for(var j = 0; j < app.attributes.length; j++) {
            const attr = app.attributes[j];
            rokuApp[attr.name] = attr.nodeValue;
        }
        channels.push(rokuApp);
    }
    return channels;
};

const getApps = async (url) => fetch(`${url}query/apps`, { method: 'GET' })
    .then(res => res.text())
    .then(xml => parseAppsResponse(xml));

const getAppIcons = async (url, channels) => Promise.all(
    channels.map(channel => RNFetchBlob.fetch('GET', `${url}query/icon/${channel.id}`)
        .then(res => res.base64())
        .then(uri => ({ id: channel.id, icon: uri }))
    )
);

const getDetails = async (url) => {
    try {
        const channels = await getApps(url);
        return getAppIcons(url, channels).then(icons => {
            return { channels, icons };
        }).catch(err => err);
    } catch(e) { return false; }
};

const search = async () => new Promise((resolve, reject) => {
    const dgram = require('react-native-udp');
    global.Buffer = global.Buffer || require('buffer').Buffer;

    const rokuUrls = [];
    const ssdpAddress = '239.255.255.250';
    const ssdpPort = 1900;
    const searchTarget = 'roku:ecp';
    const queryString = `M-SEARCH * HTTP/1.1\r\nHOST: ${ssdpAddress}:${ssdpPort}\r\nMAN: "ssdp:discover"\r\nST: ${searchTarget}\r\nMX: 5\r\n\r\n`;
    const query = new Buffer(queryString);

    const broadcastSsdp = (socket, cb) => socket.send(query, 0, query.length, ssdpPort, ssdpAddress, cb);

    const client = dgram.createSocket('udp4');

    client.bind(12345);

    client.once('listening', () => {
        broadcastSsdp(client, (err) => {
            if(err) reject(err);
            setTimeout(() => { client.close(); }, 5000);
        });
    });

    client.on('error', (err) => {
        reject(err);
    });

    client.on('message', (msg, rinfo) => {
        const matches = msg.toString().match(/Location: (.*)/i);
        if(matches) {
            const rokuUrl = matches[1];
            rokuUrls.push(rokuUrl);
        }
    });

    client.on('close', () => {
        resolve(rokuUrls);
    })
});

const findRokus = async () => {
    const NO_ROKUS_FOUND_ERROR = new Error('No rokus are found on the network');
    const DETAILS_ERROR = new Error('There was a hiccup getting details about this roku.');
    try {
        const rokus = await search();
        try {
            STATE.selectedId = rokus[0];
            STATE.rokus = rokus;
            return await getDetails(STATE.selectedId);
        } catch (error) {
            return DETAILS_ERROR;
        }
    } catch (error) {
        return NO_ROKUS_FOUND_ERROR;
    }
};

const getData = async () => {
    const FAILED_TO_RETRIEVE_FROM_STORAGE = new Error('No data has been stored on this device');
    const DETAILS_ERROR = new Error('There was a hiccup getting details about this roku.');

    try {
        let storedData = await AsyncStorage.getItem(STORAGE_KEY);
        if(storedData) {
            const { selected, rokus } = JSON.parse(storedData);
            const deviceInfo = await getDeviceInfo(selected);
            if(deviceInfo) {
                try {
                    STATE.device.info = deviceInfo;
                    STATE.selectedId = selected;
                    STATE.rokus = rokus;
                    return await getDetails(selected);
                } catch (error) {
                    return DETAILS_ERROR;
                }
            } else {
                return await findRokus();
            }
        } else {
            return await findRokus();
        }
    } catch (error) {
        return FAILED_TO_RETRIEVE_FROM_STORAGE
    }
};

const getState = (details) => {
    const { rokus, selectedId, device, hotButtonIds } = STATE;
    device.url = selectedId;
    device.channels = details.channels;
    details.icons.forEach(icon => {
        const channel = device.channels.find(channel => channel.id === icon.id);
        channel.icon = icon.icon;
    });
    device.hotButtons = device.channels.filter(channel => hotButtonIds.includes(parseInt(channel.id)));
    return { device, rokus };
};

export const onLoad = async () => {
    let state = await getData();
    if(!state.message) {
        state = getState(state);
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    return state;
};
