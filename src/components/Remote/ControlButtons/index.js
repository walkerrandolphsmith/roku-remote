import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    FastForwardButton,
    RewindButton,
    PlayButton
} from './../RemoteButtons';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        height: 50
    },
    play: {
        marginLeft: 80,
        marginRight: 80
    }
});

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