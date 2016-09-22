import React from 'react';
import AbstractButton from './AbstractButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BackButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.BACK);
    };

    render(){
        return (
            <Icon 
                name="long-arrow-left"
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}