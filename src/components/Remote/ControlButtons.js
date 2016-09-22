import React from 'react';
import { View } from 'react-native';
import {
    FastForwardButton,
    RewindButton,
    PlayButton
} from './RemoteButtons';

export class ControlButtons extends React.Component {
    render(){
        const { keys, keyPress } = this.props;

        const style = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'row',
            height: 50,
            marginTop: 25
        };

        const item = {
            marginLeft: 20,
            marginRight: 20
        };

        return (
            <View style={style}>
                <View style={item}>
                    <RewindButton keyPress={keyPress} { ...keys} />
                </View>
                <View style={item}>
                    <PlayButton keyPress={keyPress} { ...keys} />
                </View>
                <View style={item}>
                    <FastForwardButton keyPress={keyPress} { ...keys} />
                </View>
            </View>
        );
    }
}