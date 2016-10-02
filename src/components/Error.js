import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 680
    },
    text: {
        color: '#FFF'
    }
});

export default class Loading extends React.Component {
    render() {
        return (
            <Animatable.View style={styles.loading}>
                <Text style={styles.text}>{this.props.message}</Text>
            </Animatable.View>
        )
    }
}