import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    small: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: 200,
        height: 200,
        transform: [{ rotate: '45deg'}],
        justifyContent: 'center'
    },
    up: {
        position: 'absolute',
        left: 0,
        top: 0,
        transform: [{ rotate: '315deg'}]
    },
    down: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        transform: [{ rotate: '315deg'}]
    },
    right: {
        position: 'absolute',
        right: 0,
        top: 0,
        transform: [{ rotate: '315deg'}]
    },
    left: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        transform: [{ rotate: '315deg'}]
    },
    iconWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'transparent'
    },
    okWrapper: {
        position: 'absolute',
        top: 50,
        left: 50,
        transform: [{ rotate: '315deg'}],
        width: 90,
        height: 90,
        borderRadius: 90,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    ok: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

