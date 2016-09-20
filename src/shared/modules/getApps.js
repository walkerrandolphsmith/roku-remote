import { createAction } from 'redux-actions';
import { getAppIcons } from './getAppIcons';
const DOMParser = require('xmldom').DOMParser;

const ACTION = 'SET_APPS';

const success = createAction(
    ACTION,
    (xml) => ({ xml })
);

export const getApps = () => (dispatch, getState) => {
    const url = getState().atom.rokus[0].url;
    const appsUrl = `${url}query/apps`;

    fetch(appsUrl, {
        method: 'GET'
    }).then((res) => {
        res.text().then(xml => {
            dispatch(success(xml));
            dispatch(getAppIcons());
        });
    });
};

export const reducer = (state, payload) => {
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

export default {
    [ACTION]: reducer
};