import convertToXML from './convertToXML';
import convertToJson from './parseDeviceInfoResponse';

export default async (url) => fetch(`${url}query/device-info`, { method: 'GET' })
    .then(res => res.text())
    .then(text => convertToXML(text))
    .then(xml => convertToJson(xml));