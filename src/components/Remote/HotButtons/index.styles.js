import { StyleSheet, Image } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150
    },
    labelWrapper: {
        flex: 2,
        alignItems: 'center'
    },
    label: {

    },
    iconWrapper: {
        flex: 1
    },
    icon: {
        width: 16,
        height: 16,
        resizeMode: Image.resizeMode.contain
    }
});