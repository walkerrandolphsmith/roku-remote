import { StyleSheet, Image } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10
    },
    iconWrapper: {

    },
    icon: {
        width: 120,
        height: 80,
        resizeMode: Image.resizeMode.contain,
        marginBottom: 10
    }
});