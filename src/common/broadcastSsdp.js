const ssdpAddress = '239.255.255.250:1900';
const ssdpPort = '1900';
const searchTarget = 'roku:ecp';

const query = new Buffer(
    `M-SEARCH * HTTP/1.1\r\n
    HOST:${ssdpAddress}:${ssdpPort}\r\n
    MAN:"ssdp:discover"\r\n
    ST:${searchTarget}\r\n
    MX:5\r\n
    \r\n`
);

module.exports = socket => send(query, 0, query.length, ssdpPort, ssdpAddress);