import { setSelectedDeviceOnLoad } from './selectedDeivce';
import { getRokuDevices } from './devices';
import { getApps } from './getApps';
import { getDeviceInfo } from './getDeviceInfo';
import { getAppIcons } from './getAppIcons';

export const onLoad = () => (dispatch) => {
    dispatch(setSelectedDeviceOnLoad());
    setTimeout(() => {
        dispatch(getRokuDevices()).then(res => {
            dispatch(getDeviceInfo());
            dispatch(getApps()).then(res => {
                dispatch(getAppIcons());
            })
        });
    }, 2)
};