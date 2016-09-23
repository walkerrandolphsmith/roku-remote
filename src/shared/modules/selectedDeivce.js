import { createSelector } from 'reselect';

const rokusSelector = (state) => state.atom.rokus;
const selectedDeviceSelector = (state) => state.atom.selectedDevice;

export const getSelectedDevice = createSelector(
    [rokusSelector, selectedDeviceSelector],
    (rokus, selectedDevice) => rokus.find(roku => roku.url === selectedDevice) || {}
);
