import React from 'react';
import AbstractButton from './AbstractButton';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default class FastForwardButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.FWD);
    };

    render(){
        return (
            <Icon
                name="forward"
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}