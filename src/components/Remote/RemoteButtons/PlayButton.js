import React from 'react';
import AbstractButton from './AbstractButton';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default class PlayButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.PLAY);
    };

    render(){
        return (
            <Icon
                name="play"
                size={AbstractButton.defaultProps.size}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}