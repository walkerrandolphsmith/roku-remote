import React from 'react';
import AbstractButton from './AbstractButton';
import Button from 'react-native-button';

export default class PlayButton extends AbstractButton {
    static defaultProps = {
        label: 'Play'
    };

    childHandler = () => {
        this.handler(this.props.PLAY);
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