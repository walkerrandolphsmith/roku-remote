import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AbstractButton from './AbstractButton';

export default class DownButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.DOWN);
    };

    render(){
        return (
            <Icon
                name="angle-down"
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}