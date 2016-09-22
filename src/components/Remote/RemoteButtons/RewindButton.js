import React from 'react';
import AbstractButton from './AbstractButton';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default class RewindButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.REV);
    };

    render(){
        return (
            <Icon
                name="backward"
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}