import React from 'react';
import Button from 'react-native-button';
import AbstractButton from './AbstractButton';
import roku from './../../../common/api';

export default class HomeButton extends AbstractButton {
    static defaultProps = {
        label: 'Home'
    };

    handler = () => {
        const { baseUrl, keys } = roku();
        fetch(`${baseUrl}/keypress/${keys.HOME}`, {
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