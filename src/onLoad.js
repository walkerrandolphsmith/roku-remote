import { AsyncStorage } from 'react-native';
import Config from 'react-native-config';
import getChannels from './getChannels';
import getDeviceInfo from './getDeviceInfo';
import search from './search';
import getState from './getState';

const IS_STORAGE_ENABLED = (Config.IS_STORAGE_DISABLED || 1) === 1;

const STORAGE_KEY = IS_STORAGE_ENABLED ? '@RokuRemote:key' : '@RokuRemote:SAVE_DISABLED';

const findRokus = async () => {
    return search().then(rokus => {
        if(rokus.length > 0) {
            return getChannels(rokus[0]).then(channels => ({ channels, rokus }))
        } else {
            return new Error('Error occured while talking with the roku.');
        }
    }).catch(() => {
        return new Error('No rokus are found on the network.');
    });
};

const getData = async () => {
    try {
        let storedData = await AsyncStorage.getItem(STORAGE_KEY);
        storedData = JSON.parse(storedData);
        if(storedData) {
            const deviceInfo = await getDeviceInfo(storedData.device.url);
            if(deviceInfo) {
                return { fromStorage: true, ...storedData };
            } else {
                return await findRokus();
            }
        } else {
            return await findRokus();
        }
    } catch (error) {
        return new Error('An error occured remembering your preferences.');
    }
};

export const onLoad = async () => {
    let state = await getData();
    if(!state.message && !state.fromStorage) {
        state = getState(state);
        if(IS_STORAGE_ENABLED) {
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
    }
    return state;
};
