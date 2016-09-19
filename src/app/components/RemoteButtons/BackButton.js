import React from 'react';
import AbstractButton from './AbstractButton';
import Button from 'react-native-button';
import roku from './../../../common/api';

export default class BackButton extends AbstractButton {
    static defaultProps = {
        label: 'Back'
    };

    handler = () => {
        const { baseUrl, keys } = roku();
        fetch(`${baseUrl}/keypress/${keys.BACK}`, {
            method: 'POST'
        }).then((res) => {
            res.text().then(xmlString => {

            });
        }).catch(err => {
            console.log('err', err);
        });
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