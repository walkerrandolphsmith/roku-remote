import RNFetchBlob from 'react-native-fetch-blob'
import convertToJson from './parseAppsResponse';
import convertToXML from './convertToXML';

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