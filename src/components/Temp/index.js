import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ControlButtons } from './ControlButtons';
import { NavigationButtons } from './NavigationButtons';

export class Temp extends React.Component {
    render(){
        const large = {
            borderWidth: 0.5,
            borderColor: '#d6d7da',
            width: 280,
            height: 280,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        };

        const topLeft = {
            position: 'absolute',
            left: 25,
            top: 25
        };

        const topRight = {
            position: 'absolute',
            right: 25,
            top: 25
        };

        const bottomLeft = {
            position: 'absolute',
            left: 25,
            bottom: 25
        };

        const bottomRight = {
            position: 'absolute',
            right: 25,
            bottom: 25
        };



        return (
            <View>
                <View style={large}>
                    <View style={topLeft}>
                        <Icon name="long-arrow-left" size={30} color="#000" />
                    </View>
                    <View style={topRight}>
                        <Icon name="home" size={30} color="#000" />
                    </View>
                    <NavigationButtons />
                    <View style={bottomLeft}>
                        <Icon name="home" size={30} color="#000" />
                    </View>
                    <View style={bottomRight}>
                        <Icon name="asterisk" size={30} color="#000" />
                    </View>
                </View>
                <ControlButtons />
            </View>
        );
    }
}