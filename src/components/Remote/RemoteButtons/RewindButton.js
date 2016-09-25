import React from 'react';
import AbstractButton from './AbstractButton';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default class RewindButton extends AbstractButton {
    childHandler = () => {
        this.handler('Rev');
    };

    render(){
        return (
            <Icon
                name="backward"
                size={AbstractButton.defaultProps.size}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}