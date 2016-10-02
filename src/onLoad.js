import { AsyncStorage } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
const DOMParser = require('xmldom').DOMParser;
import Config from 'react-native-config'

const IS_STORAGE_ENABLED = (Config.IS_STORAGE_DISABLED || 1) === 1;

const STORAGE_KEY = IS_STORAGE_ENABLED ? '@RokuRemote:key' : '@RokuRemote:SAVE_DISABLED';

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
        .then(uri => ({ ...channel, icon: uri }))
    )
);

const getChannels = async (url) => getApps(url)
    .then(channels => getAppIcons(url, channels));

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
    return search().then(rokus => {
        if(rokus.length > 0) {
            return getChannels(rokus[0]).then(channels => ({ channels, rokus }))
        } else {
            return new Error('Error occured while talking with the roku.');
        }
    }).catch(() => {
        return new Error('No rokus are found on the network.');
    });
};

const getData = async () => {
    try {
        let storedData = await AsyncStorage.getItem(STORAGE_KEY);
        storedData = JSON.parse(storedData);
        if(storedData) {
            const deviceInfo = await getDeviceInfo(storedData.device.url);
            if(deviceInfo) {
                return { fromStorage: true, ...storedData };
            } else {
                return await findRokus();
            }
        } else {
            return await findRokus();
        }
    } catch (error) {
        return new Error('An error occured remembering your preferences.');
    }
};

const getHotButtons = (ids, channels) => channels.filter(channel => ids.includes(channel.id));

const getState = ({ channels, rokus }) => ({
    rokus: rokus,
    url: rokus[0],
    channels: channels,
    hotButtons: getHotButtons(['12', '13', '46041', '2285'], channels)
});

export const onLoad = async () => {
    let state = await getData();
    if(!state.message && !state.fromStorage) {
        state = getState(state);
        if(IS_STORAGE_ENABLED) {
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
    }
    return state;
};
