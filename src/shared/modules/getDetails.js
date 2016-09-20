import { getApps } from './getApps';
import { getDeviceInfo } from './getDeviceInfo';

export const getRokuDetails = () => (dispatch, getState) => {
    dispatch(getApps());
    dispatch(getDeviceInfo());
};