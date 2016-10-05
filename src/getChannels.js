import RNFetchBlob from 'react-native-fetch-blob'
import convertToXML from './convertToXML';

export const convertToJson = (xml) => Object
    .keys(xml.getElementsByTagName('app'))
    .filter(key => Number.isInteger(parseInt(key)))
    .map(key => xml.getElementsByTagName('app')[key])
    .reduce((channels, node) => channels.concat([
        Object
            .keys(node.attributes)
            .filter(key => Number.isInteger(parseInt(key)))
            .map(key => node.attributes[key])
            .reduce((app, attr) => Object.assign(
            app, { [attr.name]: attr.nodeValue }
        ), { name: node.childNodes[0].nodeValue })
    ]), []);

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