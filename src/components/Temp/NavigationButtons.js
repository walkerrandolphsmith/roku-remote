import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class NavigationButtons extends React.Component {
    render(){

        const size = 65;
        const color = '#000';

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
            height: 50
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

        const okText = {
            fontSize: 30
        };

        return (
            <View style={small}>
                <View style={right}>
                    <View style={iconWrapper}>
                        <Icon name="angle-right" size={size} color={color} />
                    </View>
                </View>

                <View style={left}>
                    <View style={iconWrapper}>
                        <Icon name="angle-left" size={size} color={color} />
                    </View>
                </View>

                <View style={okWrapper}>
                    <View style={ok}>
                        <Text style={okText}>OK</Text>
                    </View>
                </View>

                <View style={up}>
                    <View style={iconWrapper}>
                        <Icon name="angle-up" size={size} color={color} />
                    </View>
                </View>

                <View style={down}>
                    <View style={iconWrapper}>
                        <Icon name="angle-down" size={size} color={color} />
                    </View>
                </View>

            </View>
        );

    }
}
