import RNFetchBlob from 'react-native-fetch-blob'
const DOMParser = require('xmldom').DOMParser;

const STATE = {
    rokus: [],
    selectedDevice: 'http://10.0.0.8:8060/',
    channels: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    hotButtons: [12, 13, 46041, 2285]
};

const STORAGE_KEY = '@RokuRemote:key';

const getRokuFromStorage = async () => {
    try {
        const id = await AsyncStorage.getItem(STORAGE_KEY);
    } catch(error) {
        
    }
};

const saveRokuToStorage = async (id) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, id);
    } catch (error) {
        
    }
};

const getDeviceInfo = () => {
    const url = STATE.selectedDevice;
    const endpoint = `${url}query/device-info`;

    return fetch(endpoint, {
        method: 'GET'
    }).then((res) => {
        return res.text().then(xml => {
            return parseDeviceInfoResponse(xml);
        });
    });
};

const parseDeviceInfoResponse = (xml) => {
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

const parseAppsResponse = (xml) => {
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

const getApps = () => {
    const url = STATE.selectedDevice;
    const endpoint = `${url}query/apps`;

    return fetch(endpoint, {
        method: 'GET'
    }).then((res) => {
        return res.text().then(xml => {
            return parseAppsResponse(xml);
        });
    }).catch(err => {
        
    });
};

const getAppIcons = (channels) => {
    const url = STATE.selectedDevice;

    return channels.map(channel => {
        return RNFetchBlob.fetch('GET', `${url}query/icon/${channel.id}`).then(res => {
            const base64Str = res.base64();
            //update global
            return { id: channel.id, icon: base64Str };
        });
    });
};

const getDetails = () => {
    return getApps().then(channels => {
        return Promise.all(getAppIcons(channels)).then(icons => {
            return { channels, icons };
        }).catch(() => {
            return false;
        });
    }).catch(appRetreivalFailure => {
        return false;
    });
};

const broadcastSsdp = () => new Promise((resolve, reject) => {
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

const findRokus = () => {
    return broadcastSsdp().then((rokuUrls) => {
        return rokuUrls.map(url => { url: url });
    }).catch(rokusWereNotFound => {
        return 'NO_ROKUS_FOUND';
    })
};

const updateStateWithDetails = (details) => {
    const selectedRoku = getSelectedDevice(STATE.rokus, STATE.selectedDevice);
    selectedRoku.channels = details.channels;
    details.icons.forEach(icon => {
        const channel = selectedRoku.channels.find(channel => channel.id === icon.id);
        channel.icon = icon.icon;
    });
};

const getHotButtons = (channels, hotButtonIds) => channels
    .filter(channel => hotButtonIds.includes(parseInt(channel.id)));

const getSelectedDevice = (rokus, selectedDeviceId) => rokus
    .find(roku => roku.url === selectedDeviceId) || { url: selectedDeviceId, channels: [] };

const getHydratedSelectedDevice = (selectedDevice) => {
    const hotButtons = getHotButtons(selectedDevice.channels, STATE.hotButtons);
    selectedDevice.hotButtons = hotButtons;
    return selectedDevice;
};

export const onLoad = () => new Promise((resolve, reject) => {
    getRokuFromStorage().then(foundRokuInStorage => {
        STATE.selectedDevice = foundRokuInStorage;
        getDeviceInfo().then(deviceInfo => {
            //Device is reachable on the network
            const selectedRoku = getSelectedDevice(STATE.rokus, STATE.selectedDevice);
            selectedRoku.info = deviceInfo;
            getDetails().then(details => {
                updateStateWithDetails(details);
                resolve(getHydratedSelectedDevice(STATE.rokus, STATE.selectedDevice));
            });
        }).catch(() => {
            findRokus().then(rokus => {
                const firstRokuFound = rokus[0];
                saveRokuToStorage(firstRokuFound);
                STATE.selectedDevice = firstRokuFound;
                getDetails().then(details => {
                    updateStateWithDetails(details);
                    resolve(getHydratedSelectedDevice(STATE.rokus, STATE.selectedDevice));
                });
            }).catch(err => {
                
            });
        });
    }).catch(() => {
        findRokus().then(rokus => {
            const firstRokuFound = rokus[0];
            saveRokuToStorage(firstRokuFound);
            STATE.selectedDevice = firstRokuFound;
            getDetails().then(details => {
                updateStateWithDetails(details);
                resolve(getHydratedSelectedDevice(STATE.rokus, STATE.selectedDevice));
            });
        }).catch(err => {

        });
    });
});
