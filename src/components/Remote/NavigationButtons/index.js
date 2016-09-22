import React from 'react';
import { Text, View } from 'react-native';
import {
    DownButton,
    LeftButton,
    OkButton,
    RightButton,
    UpButton
} from './../RemoteButtons';

export class NavigationButtons extends React.Component {
    render(){
        const { keys, keyPress } = this.props;

        const small = {
            borderWidth: 0.5,
            borderColor: '#d6d7da',
            width: 200,
            height: 200,
            transform: [{ rotate: '45deg'}],
            justifyContent: 'center'
        };

        const up = {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [{ rotate: '315deg'}]
        };

        const down = {
            position: 'absolute',
            right: 0,
            bottom: 0,
            transform: [{ rotate: '315deg'}]
        };

        const right = {
            position: 'absolute',
            right: 0,
            top: 0,
            transform: [{ rotate: '315deg'}]
        };

        const left = {
            position: 'absolute',
            left: 0,
            bottom: 0,
            transform: [{ rotate: '315deg'}]
        };

        const iconWrapper = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            backgroundColor: 'transparent'
        };

        const okWrapper = {
            position: 'absolute',
            top: 50,
            left: 50,
            transform: [{ rotate: '315deg'}],
            width: 90,
            height: 90,
            borderRadius: 90,
            borderWidth: 0.5,
            borderColor: '#d6d7da'
        };

        const ok = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        };

        return (
            <View style={small}>
                <View style={right}>
                    <View style={iconWrapper}>
                        <RightButton keyPress={keyPress} { ...keys} />
                    </View>
                </View>

                <View style={left}>
                    <View style={iconWrapper}>
                        <LeftButton keyPress={keyPress} { ...keys} />
                    </View>
                </View>

                <View style={okWrapper}>
                    <View style={ok}>
                        <OkButton keyPress={keyPress} { ...keys}/>
                    </View>
                </View>

                <View style={up}>
                    <View style={iconWrapper}>
                        <UpButton keyPress={keyPress} { ...keys} />
                    </View>
                </View>

                <View style={down}>
                    <View style={iconWrapper}>
                        <DownButton keyPress={keyPress} { ...keys} />
                    </View>
                </View>
            </View>
        );

    }
}
