import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AbstractButton from './AbstractButton';

export default class DownButton extends AbstractButton {
    childHandler = () => {
        this.handler('Down');
    };

    render(){
        return (
            <Icon
                name="angle-down"
                size={AbstractButton.defaultProps.largeSize}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}