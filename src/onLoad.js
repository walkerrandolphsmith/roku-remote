import { AsyncStorage } from 'react-native';
import getChannels from './getChannels';
import getDeviceInfo from './getDeviceInfo';
import search from './search';
import getState from './getState';

const STORAGE_KEY = '@RokuRemote:key';

const findRokus = async () => {
    try {
        const rokus = await search();
        return rokus.length > 0
            ? getChannels(rokus[0]).then(channels => ({channels, rokus}))
            : new Error('Error occured while talking with the roku.');
    } catch(error) {
        return new Error('No rokus are found on the network.');
    }
};

const getData = async () => {
    try {
        const storedData = JSON.parse(
            await AsyncStorage.getItem(STORAGE_KEY)
        );
        if(!storedData) {
            return await findRokus();
        }
        const deviceInfo = await getDeviceInfo(storedData.device.url);
        return await deviceInfo ? { fromStorage: true, ...storedData } : findRokus();
    } catch (error) {
        return new Error('An error occured remembering your preferences.');
    }
};

export const onLoad = async () => {
    let state = await getData();
    if(!state.message && !state.fromStorage) {
        state = getState(state);
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    return state;
};
