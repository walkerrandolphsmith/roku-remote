import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './Loading.styles';

export default class Loading extends React.Component {
    render() {
        return (
            <Animatable.View style={styles.loading}>
                <View style={styles.loadingBall} />
            </Animatable.View>
        )
    }
}