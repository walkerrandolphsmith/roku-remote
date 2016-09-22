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
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}