import React from 'react';
import Button from 'react-native-button';

export default class HomeButton extends React.Component {

    static defaultProps = {
        style: {
            fontSize: 20,
            color: 'white',
            backgroundColor: 'green'
        },
        disabledStyle: {
            fontSize: 20,
            color: 'green',
            backgroundColor: 'red'
        }
    };


    state = {
        label: 'Press Me'
    };

    handler = () => {
        this.setState({ label: 'Unpress me' });
    };

    render(){
        const { style, disabledStyle } = HomeButton.defaultProps;

        return (
            <Button
                style={style}
                styleDisabled={disabledStyle}
                onPress={this.handler}>
                {this.state.label}
            </Button>
        );
    }
}