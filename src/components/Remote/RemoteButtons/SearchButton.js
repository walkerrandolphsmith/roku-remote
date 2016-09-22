import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AbstractButton from './AbstractButton';

export default class SearchButton extends AbstractButton {
    childHandler = () => {
        this.handler(this.props.SEARCH);
    };

    render(){
        return (
            <Icon
                name="search"
                size={AbstractButton.defaultProps.size}
                color={AbstractButton.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}