import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AbstractButton from './AbstractButton';

export default class UpButton extends AbstractButton {
    childHandler = () => {
        this.handler('Up');
    };

    render(){
        return (
            <Icon
                name="angle-up"
                size={AbstractButton.defaultProps.largeSize}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}