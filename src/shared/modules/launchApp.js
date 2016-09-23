export const launchApp = (id) => (dispatch, getState) => {
    const url = getState().atom.selectedDevice;
    fetch(`${url}launch/${id}`, {
        method: 'POST'
    }).then(res => {

    });
};