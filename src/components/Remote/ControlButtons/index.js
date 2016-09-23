import React from 'react';
import { View } from 'react-native';
import {
    FastForwardButton,
    RewindButton,
    PlayButton
} from './../RemoteButtons';
import styles from './index.styles';

export class ControlButtons extends React.Component {
    render(){
        const { keys, keyPress } = this.props;
        return (
            <View style={styles.wrapper}>
                <View>
                    <RewindButton keyPress={keyPress} { ...keys} />
                </View>
                <View style={styles.play}>
                    <PlayButton keyPress={keyPress} { ...keys} />
                </View>
                <View>
                    <FastForwardButton keyPress={keyPress} { ...keys} />
                </View>
            </View>
        );
    }
}