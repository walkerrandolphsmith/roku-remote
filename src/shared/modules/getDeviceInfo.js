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
    return { ...state };
};

export default {
    [ACTION]: reducer
};