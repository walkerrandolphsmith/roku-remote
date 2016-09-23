import { createSelector } from 'reselect';
import { createAction } from 'redux-actions';
import { AsyncStorage } from 'react-native';

const STORAGE_KEY = '@RokuRemote:key';

const rokusSelector = (state) => state.atom.rokus;
const selectedDeviceSelector = (state) => state.atom.selectedDevice;

export const getSelectedDevice = createSelector(
    [rokusSelector, selectedDeviceSelector],
    (rokus, selectedDevice) => rokus.find(roku => roku.url === selectedDevice) || { url: selectedDevice }
);


const ACTION = 'SET_SELECTED_DEVICE';

const success = createAction(
    ACTION,
    (id) => ({ id })
);

export const selectDevice = (id) => async(dispatch) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, id);
        dispatch(success(id));
    } catch (error) {
        console.log(error);
    }
};

export const setSelectedDeviceOnLoad = () => async(dispatch) => {
    try {
        const id = await AsyncStorage.getItem(STORAGE_KEY);
        dispatch(success(id));
    } catch(error) {
        console.log(error);
    }
};

const reducer = (state, payload) => {
    state.selectedDevice = payload.id;
    return { ...state };
};

export default {
    [ACTION]: reducer
};