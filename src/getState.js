export const getHotButtons = (ids, channels) => channels.filter(channel => ids.includes(channel.id));

export const getState = ({ channels, rokus }, getHotButtons) => ({
    rokus: rokus,
    url: rokus[0],
    device: {
        channels: channels,
        hotButtons: getHotButtons(['12', '13', '46041', '2285'], channels)
    }
});

export default (params) => getState(params, getHotButtons);