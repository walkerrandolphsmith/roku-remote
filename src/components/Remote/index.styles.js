import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30
    },

    large: {
        width: 280,
        height: 280,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    topLeft: {
        position: 'absolute',
        left: 25,
        top: 25
    },

    topRight: {
        position: 'absolute',
        right: 25,
        top: 25
    },

    bottomLeft: {
        position: 'absolute',
        left: 25,
        bottom: 25
    },

    bottomRight: {
        position: 'absolute',
        right: 25,
        bottom: 25
    },

    controlButtons: {
        height: 50,
        marginBottom: 10
    },

    hotButtons: {
        height: 180
    }
});