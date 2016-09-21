export const launchApp = (id) => (dispatch, getState) => {
    const url = getState().atom.rokus[0].url;
    fetch(`${url}launch/${id}`, {
        method: 'POST'
    }).then(res => {

    });
};