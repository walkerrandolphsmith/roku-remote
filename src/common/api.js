const PROTOCOL = 'http';
const HOST = '10.0.0.8';
const PORT = 8060;
const keys = require('./keys');

const axios = require('axios');

const roku = (host = HOST, port = PORT, protocol = PROTOCOL) => `${protocol}://${host}:${port}`;

export default roku;
