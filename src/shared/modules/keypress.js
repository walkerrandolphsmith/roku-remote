import { createAction } from 'redux-actions';
const ACTION = 'KEYPRESS';

const toggleLoading = createAction(
    ACTION,
    (key, isLoading) => ({ key, isLoading })
);

export const keyPress = (key) => (dispatch, getState) => {
    dispatch(toggleLoading(key, true));
    const baseUrl = getState().atom.selectedDevice;

    fetch(`${baseUrl}/keypress/${key}`, {
        method: 'POST'
    }).then((res) => {
        dispatch(toggleLoading(key, false));
    }).catch(err => {
        dispatch(toggleLoading(key, false));
    });
};

const reducer = (state, payload) => {
    //state.keys[payload.key.toUpperCase()].isLoading = payload.isLoading;
    return { ...state };
};

export default {
    [ACTION]: reducer
};