import { StyleSheet, Image } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconWrapper: {
        flex: 1,
        justifyContent: 'space-between'
    },
    icon: {
        width: 90,
        height: 65,
        resizeMode: Image.resizeMode.contain
    }
});