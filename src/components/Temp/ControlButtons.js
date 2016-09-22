import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ControlButtons extends React.Component {
    render(){

        const style = {
            borderWidth: 0.5,
            borderColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'row',
            height: 50
        };

        const item = {
            marginLeft: 20,
            marginRight: 20
        };

        return (
            <View style={style}>
                <Icon style={item} name="backward" size={30} color="#000" />
                <Icon style={item} name="play" size={30} color="#000" />
                <Icon style={item} name="pause" size={30} color="#000" />
                <Icon style={item} name="forward" size={30} color="#000" />
            </View>
        );
    }
}