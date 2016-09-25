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
                    <RewindButton />
                </View>
                <View style={styles.play}>
                    <PlayButton />
                </View>
                <View>
                    <FastForwardButton />
                </View>
            </View>
        );
    }
}