import React from 'react';
import Button from 'react-native-button';
import AbstractButton from './AbstractButton';

export default class UpButton extends AbstractButton {
    static defaultProps = {
        label: 'Ok'
    };

    render(){
        const { style, disabledStyle } = AbstractButton.defaultProps;
        const label = this.getLabel();
        return (
            <Button
                style={style}
                styleDisabled={disabledStyle}
                onPress={this.handler}>
                {label}
            </Button>
        );
    }
}