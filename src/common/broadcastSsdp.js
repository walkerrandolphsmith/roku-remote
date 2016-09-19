const ssdpAddress = '239.255.255.250';
const ssdpPort = '1900';
const searchTarget = 'roku:ecp';

const queryString = `M-SEARCH * HTTP/1.1\r\nHOST: ${ssdpAddress}:${ssdpPort}\r\nMAN: "ssdp:discover"\r\nST: ${searchTarget}\r\nMX: 5\r\n\r\n`;

const query = new Buffer(queryString);

const broadcastSsdp = (socket, cb) => socket.send(query, 0, query.length, ssdpPort, ssdpAddress, cb);

const dgram = require('dgram');

const client = dgram.createSocket('udp4');

client.on('error', (err) => {
	console.log("client had an error", err);
})

client.on('message', (msg, rinfo) => {
	console.log(`server received: ${msg}`);
});

client.on('listening', () => {
	const address = client.address();
	console.log(`listening on ${address.address}:${address.port}`);
});

client.bind(() => {
	console.log('client port', client.address().port);
	
	broadcastSsdp(client, (err) => {
		if(err) console.log(err);
		else console.log('broadcasted');
		//setTimeout(() => { client.close(); }, 2000);
	});
});