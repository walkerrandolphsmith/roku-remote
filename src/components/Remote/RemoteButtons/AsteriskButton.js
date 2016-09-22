import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AbstractButton from './AbstractButton';

export default class AsteriskButton extends AbstractButton {
    childHandler = () => {

    };

    render(){
        return (
            <Icon
                name="asterisk"
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}