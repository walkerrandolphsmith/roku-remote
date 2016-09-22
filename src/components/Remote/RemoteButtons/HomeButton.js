import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AbstractButton from './AbstractButton';

export default class HomeButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.HOME);
    };

    render(){
        return (
            <Icon
                name="home"
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}