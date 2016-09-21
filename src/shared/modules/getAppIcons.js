import { createAction } from 'redux-actions';
import RNFetchBlob from 'react-native-fetch-blob'

const ACTION = 'SET_APP_ICON';

const success = createAction(
    ACTION,
    (id, icon) => ({ id, icon })
);

export const getAppIcons = () => (dispatch, getState) => {
    const channels = getState().atom.channels;
    const url = getState().atom.rokus[0].url;
    channels.forEach(channel => {
        RNFetchBlob.fetch('GET', `${url}query/icon/${channel.id}`).then(res => {
            const base64Str = res.base64();
            dispatch(success(channel.id, base64Str));
        });
    })
};

export const reducer = (state, payload) => {
    const { id, icon } = payload;
    state.channels.forEach(channel => {
        if(channel.id === id) {
            channel.icon = icon;
        }
    });
    state.channels = [...state.channels];
    return { ...state };
};

export default {
    [ACTION]: reducer
};