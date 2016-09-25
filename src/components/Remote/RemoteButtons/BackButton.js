import React from 'react';
import AbstractButton from './AbstractButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BackButton extends AbstractButton {
    childHandler = () => {
        this.handler('Back');
    };

    render(){
        return (
            <Icon 
                name="long-arrow-left"
                size={AbstractButton.defaultProps.size}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}