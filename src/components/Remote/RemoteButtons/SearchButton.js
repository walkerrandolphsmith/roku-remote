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
                size={30}
                color="#000"
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}