import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AbstractButton from './AbstractButton';

export default class LeftButton extends AbstractButton {
    childHandler = () => {
        this.handler('Left');
    };

    render(){
        return (
            <Icon
                name="angle-left"
                size={AbstractButton.defaultProps.largeSize}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}