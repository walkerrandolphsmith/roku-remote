import { StyleSheet, Image } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        alignSelf: 'stretch'
    },
    channel: {
        marginTop: 60,
        flexDirection: 'row'
    },
    labelWrapper: {
        flex: 3,
        alignItems: 'center'
    },
    label: {
        width: 300
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 20
    },
    icon: {
        width: 32,
        height: 32,
        resizeMode: Image.resizeMode.contain
    }
});