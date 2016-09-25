import React from 'react';
import AbstractButton from './AbstractButton';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default class FastForwardButton extends AbstractButton {
    childHandler = () => {
        this.handler('Fwd');
    };

    render(){
        return (
            <Icon
                name="forward"
                size={AbstractButton.defaultProps.size}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}