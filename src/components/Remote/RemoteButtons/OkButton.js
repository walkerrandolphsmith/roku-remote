import React from 'react';
import { View, Text } from 'react-native';
import AbstractButton from './AbstractButton';

export default class OkButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.SELECT);
    };

    render(){
        const okText = {
            fontSize: AbstractButton.defaultProps.size,
            color: AbstractButton.defaultProps.color
        };

        return (
            <Text style={okText} onPress={this.childHandler.bind(this)}>OK</Text>
        );
    }
}