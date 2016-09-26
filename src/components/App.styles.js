import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    remote: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30,
        alignItems: 'center'
    },
    channels: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    settings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        backgroundColor:'rgba(168, 94, 245,0.5)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot: {
        backgroundColor: '#A85EF5',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }
});