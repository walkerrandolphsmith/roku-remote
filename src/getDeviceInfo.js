import convertToXML from './convertToXML';

export const convertToJson = (xml) => {
    const specs = xml.getElementsByTagName('device-info')[0].childNodes;
    const onlyElements = [];
    for(let i = 0; i < specs.length; i++) {
        if(specs[i].tagName) {
            onlyElements.push(specs[i]);
        }
    }

    return onlyElements.reduce((deviceInfo, node) => {
        deviceInfo[node.tagName] = node.childNodes[0] ? node.childNodes[0].data : '';
        return deviceInfo
    }, {});
};

export default async (url) => fetch(`${url}query/device-info`, { method: 'GET' })
    .then(res => res.text())
    .then(text => convertToXML(text))
    .then(xml => convertToJson(xml));