import { createAction } from 'redux-actions';

const ACTION = 'GET_ROKU_DEVICES';

const success = createAction(
    ACTION,
    (rokuUrls) => ({ rokuUrls })
);

export const getRokuDevices = () => (dispatch, getState) => {
    return broadcastSsdp().then((rokuUrls) => {
        dispatch(success(rokuUrls));
    });
};

const reducer = (state, payload) => {
    const rokuDevices = payload.rokuUrls.map(url => ({ url: url }));
    state.rokus = rokuDevices;
    return { ...state };
};

export default {
    [ACTION]: reducer
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