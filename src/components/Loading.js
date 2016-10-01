import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 680
    },
    loadingBall: {
        height: 225,
        width: 225,
        backgroundColor: '#A85EF5',
        borderRadius: 225
    }
});

export default class Loading extends React.Component {
    render() {
        return (
            <Animatable.View style={styles.loading}>
                <View style={styles.loadingBall} />
            </Animatable.View>
        )
    }
}