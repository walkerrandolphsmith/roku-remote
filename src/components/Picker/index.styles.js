import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    button: {
        marginTop:25,
        marginBottom:25
    },
    buttonText: {
        textAlign: 'center'
    },
    closeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopColor: '#e2e2e2',
        borderTopWidth: 1,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth:1
    },
    closeButton: {
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10
    },
    closeButtonText: {
        color: "#FFF"
    },
    item: {
        color: "#FFF"
    }
});