import { createAction } from 'redux-actions';
const DOMParser = require('xmldom').DOMParser;

const ACTION = 'SET_INFO';

const success = createAction(
    ACTION,
    (xml) => ({ xml })
);

export const getDeviceInfo = () => (dispatch, getState) => {
    const url = getState().atom.rokus[0].url;
    const deviceInfoUrl = `${url}query/device-info`;
    
    fetch(deviceInfoUrl, {
        method: 'GET'
    }).then((res) => {
        res.text().then(xml => {
            dispatch(success(xml));
        });
    });
};

export const reducer = (state, payload) => {
    const { xml } = payload;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml);
    const specs = xmlDoc.getElementsByTagName('device-info')[0].childNodes;
    const onlyElements = [];
    for(let i = 0; i < specs.length; i++) {
        if(specs[i].tagName) {
            onlyElements.push(specs[i]);
        }
    }

    const deviceInfo = onlyElements.reduce((deviceInfo, node) => {
        deviceInfo[node.tagName] = node.childNodes[0].data;
        return deviceInfo
    }, {});

    state.deviceInfo = deviceInfo;
    return { ...state };
};

export default {
    [ACTION]: reducer
};