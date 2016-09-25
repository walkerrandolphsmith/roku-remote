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
        const { url } = this.props;
        return (
            <View style={styles.wrapper}>
                <View>
                    <RewindButton url={url} />
                </View>
                <View style={styles.play}>
                    <PlayButton url={url} />
                </View>
                <View>
                    <FastForwardButton url={url} />
                </View>
            </View>
        );
    }
}