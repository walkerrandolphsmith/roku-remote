import { createAction } from 'redux-actions';

const ACTION = 'SET_APP_ICON';

const success = createAction(
    ACTION,
    (id, icon) => ({ id, icon })
);

export const getAppIcons = () => (dispatch, getState) => {
    const channels = getState().atom.channels;
    const url = getState().atom.rokus[0].url;
    channels.forEach(channel => {
        fetch(`${url}query/icon/${channel.id}`, {
            method: 'GET'
        }).then(res => {
            //react-native-fetch-blob
            dispatch(success(channel.id, 'icon'));
        });
    })
};

export const reducer = (state, payload) => {
    const { id, icon } = payload;
    const channelToUpdate = state.channels.find(channel => channel.id === id);
    //channelToUpdate.icon = icon;
    return { ...state };
};

export default {
    [ACTION]: reducer
};