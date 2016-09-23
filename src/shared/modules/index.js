import keys from './../constants/keys';
import devices, { getRokuDevices } from './devices';
import { getSelectedDevice } from './selectedDeivce';
import { getRokuDetails } from './getDetails';
import getAppIcons from './getAppIcons';
import getApps from './getApps';
import getDeviceInfo from './getDeviceInfo';
import keypress, { keyPress } from './keypress';
import { launchApp } from './launchApp';
import { getHotButtons } from './hotButtons';

const handlers = [
    devices,
    getAppIcons,
    getApps,
    getDeviceInfo,
    keypress
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = {
    rokus: [
        { url: 'http://10.0.0.8:8060/' }
    ],
    selectedDevice: 'http://10.0.0.8:8060/',
    keys: keys,
    channels: [],
    hotButtons: [12, 13, 46041, 2285]
};

export default (state = DEFAULT_STATE, action = {}) => {
    const { type, payload } = action;
    return handlers[type] ? handlers[type](state, payload) : state;
}

export const actions = {
    getRokuDevices,
    getRokuDetails,
    keyPress,
    launchApp
};

export const selectors = {
    getSelectedDevice,
    getHotButtons
};
