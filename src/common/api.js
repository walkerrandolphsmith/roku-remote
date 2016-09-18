const protocol = 'http';
const host = '10.0.0.8';
const port = 8060;
const baseUrl = `${protocol}://${host}:${port}`;
const keys = require('./keys');

const axios = require('axios');

const http = axios.create({
    baseURL: baseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});