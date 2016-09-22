import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AbstractButton from './AbstractButton';

export default class RightButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.RIGHT);
    };

    render(){
        return (
            <Icon
                name="angle-right"
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}