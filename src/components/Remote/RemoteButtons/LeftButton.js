import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AbstractButton from './AbstractButton';

export default class LeftButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.LEFT);
    };

    render(){
        return (
            <Icon
                name="angle-left"
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}