import React from 'react';
import AbstractButton from './AbstractButton';
import Button from 'react-native-button';
import roku from './../../../common/api';

export default class FastForwardButton extends AbstractButton {
    static defaultProps = {
        label: 'Fwd'
    };

    childHandler = () => {
        this.handler(this.props.FWD);
    };

    render(){
        const { style, disabledStyle } = AbstractButton.defaultProps;
        const label = this.getLabel();
        return (
            <Button
                style={style}
                styleDisabled={disabledStyle}
                onPress={this.childHandler.bind(this)}>
                {label}
            </Button>
        );
    }
}