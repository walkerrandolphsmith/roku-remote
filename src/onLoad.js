import { AsyncStorage } from 'react-native';
import Config from 'react-native-config';
import getChannels from './getChannels';
import getDeviceInfo from './getDeviceInfo';
import search from './search';

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

export const getHotButtons = (ids, channels) => channels.filter(channel => ids.includes(channel.id));

export const getState = ({ channels, rokus }, getHotButtons) => ({
    rokus: rokus,
    url: rokus[0],
    device: {
        channels: channels,
        hotButtons: getHotButtons(['12', '13', '46041', '2285'], channels)
    }
});

export const onLoad = async () => {
    let state = await getData();
    if(!state.message && !state.fromStorage) {
        state = getState(state, getHotButtons);
        if(IS_STORAGE_ENABLED) {
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
    }
    return state;
};
