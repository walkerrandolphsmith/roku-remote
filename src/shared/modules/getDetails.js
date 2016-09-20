import { createAction } from 'redux-actions';
const DOMParser = require('xmldom').DOMParser;

const SET_APPS = 'SET_APPS';

const setApps = createAction(
    SET_APPS,
    (xml) => ({ xml })
);

const SET_INFO = 'SET_INFO';

const setInfo = createAction(
    SET_INFO,
    (xml) => ({ xml })
);

export const getRokuDetails = () => (dispatch, getState) => {
    const url = getState().atom.rokus[0].url;
    const appsUrl = `${url}query/apps`;
    const deviceInfoUrl = `${url}query/device-info`;

    fetch(appsUrl, {
        method: 'GET'
    }).then((res) => {
        res.text().then(xml => {
            dispatch(setApps(xml));
        });
    });

    fetch(deviceInfoUrl, {
        method: 'GET'
    }).then((res) => {
        res.text().then(xml => {
            dispatch(setInfo(xml));
        });
    });
};

const setAppsReducer = (state, payload) => {
    const { xml } = payload;
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
    state.channels = channels;
    return { ...state };
};

const setInfoReducer = (state, payload) => {
    const { xml } = payload;
    return { ...state };
};

export default {
    [SET_APPS]: setAppsReducer,
    [SET_INFO]: setInfoReducer
};