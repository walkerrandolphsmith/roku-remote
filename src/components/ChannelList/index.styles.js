import { StyleSheet, Image } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    channel: {
        flexDirection: 'row'
    },
    iconWrapper: {
        flex: 1,
        width: 100,
        height: 100,
        margin: 10
    },
    icon: {
        width: 100,
        height: 100,
        resizeMode: Image.resizeMode.contain
    }
});