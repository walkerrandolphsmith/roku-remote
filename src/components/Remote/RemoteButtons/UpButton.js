import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AbstractButton from './AbstractButton';

export default class UpButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.UP);
    };

    render(){
        return (
            <Icon
                name="angle-up"
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}