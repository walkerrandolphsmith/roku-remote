import React from 'react';
import AbstractButton from './AbstractButton';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default class PlayButton extends AbstractButton {

    state = {
        isPaused: false
    };

    childHandler = () => {
        this.handler('Play');
        this.setState({ isPaused: !this.state.isPaused })
    };

    render(){

        const name = this.state.isPaused ? 'pause' : 'play';


        return (
            <Icon
                name={name}
                size={AbstractButton.defaultProps.size}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}