import RNFetchBlob from 'react-native-fetch-blob'
import convertToXML from './convertToXML';

export const convertToJson = (xml) => {
    const appTag = xml.getElementsByTagName('app');
    const channels = [];
    for(var i = 0; i < appTag.length; i++){
        const app = appTag[i];
        const rokuApp = { name: app.childNodes[0].nodeValue };
        for(var j = 0; j < app.attributes.length; j++) {
            const attr = app.attributes[j];
            rokuApp[attr.name] = attr.nodeValue;
        }
        channels.push(rokuApp);
    }
    return channels;
};

export default async (url) => fetch(`${url}query/apps`, { method: 'GET' })
    .then(res => res.text())
    .then(text => convertToXML(text))
    .then(xml => convertToJson(xml))
    .then(channels => Promise.all(
        channels.map(channel => RNFetchBlob.fetch('GET', `${url}query/icon/${channel.id}`)
            .then(res => res.base64())
            .then(uri => ({ ...channel, icon: uri }))
        )
    ));