import { setSelectedDeviceOnLoad } from './selectedDeivce';
import { getRokuDevices } from './devices';
import { getApps } from './getApps';
import { getDeviceInfo } from './getDeviceInfo';
import { getAppIcons } from './getAppIcons';

export const onLoad = () => (dispatch) => new Promise((resolve, reject) => {
    dispatch(setSelectedDeviceOnLoad());
    setTimeout(() => {
        dispatch(getRokuDevices()).then(res => {
            dispatch(getDeviceInfo());
            dispatch(getApps()).then(res => {
                Promise.all(dispatch(getAppIcons())).then(res => {
                    resolve(true);
                });
            });
        });
    }, 2)
});