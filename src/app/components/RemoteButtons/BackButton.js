import React from 'react';
import AbstractButton from './AbstractButton';
import Button from 'react-native-button';

export default class BackButton extends AbstractButton {
    static defaultProps = {
        label: 'Back'
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