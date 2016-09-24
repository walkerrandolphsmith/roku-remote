import { createSelector } from 'reselect';

const hotButtonsSelector = (state) => state.atom.hotButtons;
const channelsSelector = (state) => state.atom.channels;

export const getHotButtons = createSelector(
    [hotButtonsSelector, channelsSelector],
    (hotButtonIds, channels) => {
        const hotButtons = channels.filter(channel => hotButtonIds.includes(parseInt(channel.id)));
        return hotButtons.length > 0 ? hotButtons : [{},{},{},{}]
    }
);