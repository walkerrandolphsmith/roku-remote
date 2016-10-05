import convertToXML from './convertToXML';

export const convertToJson = (xml) => xml
    .getElementsByTagName('device-info')[0].childNodes
    .reduce((elements, node) => elements.concat(node.tagName ? [node] : []), [])
    .reduce((device, node) => Object.assign(device, { [node.tagName]: (node.childNodes[0] || {data: ''}).data }), {});

export default async (url) => fetch(`${url}query/device-info`, { method: 'GET' })
    .then(res => res.text())
    .then(text => convertToXML(text))
    .then(xml => convertToJson(xml));