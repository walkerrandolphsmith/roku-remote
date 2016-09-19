const dgram = require('react-native-udp');
global.Buffer = global.Buffer || require('buffer').Buffer;

const ssdpAddress = '239.255.255.250';
const ssdpPort = 1900;

const searchTarget = 'roku:ecp';

const queryString = `M-SEARCH * HTTP/1.1\r\nHOST: ${ssdpAddress}:${ssdpPort}\r\nMAN: "ssdp:discover"\r\nST: ${searchTarget}\r\nMX: 5\r\n\r\n`;

const query = new Buffer(queryString);

const broadcastSsdp = (socket, cb) => socket.send(query, 0, query.length, ssdpPort, ssdpAddress, cb);


module.exports = () => {
	const client = dgram.createSocket('udp4');

	client.bind(12345);

	client.once('listening', () => {
		const address = client.address();
		console.log(`listening on ${address.address}:${address.port}`);
		broadcastSsdp(client, (err) => {
			if(err) console.log(err);
			else console.log('broadcasted');
			//setTimeout(() => { client.close(); }, 2000);
		});
	});

	client.on('error', (err) => {
		console.log("client had an error", err);
	});

	client.on('message', (msg, rinfo) => {
		console.log(`server received: ${msg}`);
	});

};