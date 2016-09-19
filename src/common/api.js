const PROTOCOL = 'http';
const HOST = '10.0.0.8';
const PORT = 8060;

const axios = require('axios');

const roku = (host = HOST, port = PORT, protocol = PROTOCOL) => {
    const baseUrl = `${protocol}://${host}:${port}`;
    return {
        baseUrl: baseUrl,
        keys: {}
    }
};

export default roku;

/*
axios.get(`${roku().baseUrl}/query/apps`).then((res) => {
    console.log('success', res.data);
}).catch(err => {
    console.log('err');
});*/
