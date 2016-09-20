import { createAction } from 'redux-actions';
import { createSelector } from 'reselect';
const ACTION = 'GET_ROKU_DETAILS';

const success = createAction(
    ACTION,
    (details) => ({ details })
);

export const getRokuDetails = () => (dispatch, getState) => {
    const url = getState().atom.rokus[0].url;
    const appsUrl = `${url}query/apps`;
    const deviceInfoUrl = `${url}query/device-info`;

    return fetch(appsUrl, {
        method: 'GET'
    }).then((res) => {
        res.text().then(xml => {
            console.log(xml.toString());
        });
    }).then(() => {
        return fetch(deviceInfoUrl, {
            method: 'GET'
        }).then((res) => {
            res.text().then(xml => {
                console.log(xml.toString());
            });
        });
    });
};

const reducer = (state, payload) => {
    return { ...state };
};

export default {
    [ACTION]: reducer
};