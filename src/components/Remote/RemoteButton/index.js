import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Button extends React.Component {
    static defaultProps = {
        icon: '',
        name: '',
        color: '#A85EF5',
        size: 30,
        largeSize: 60
    };

    handler = (key) => {
        fetch(`${this.props.url}/keypress/${key}`, {
            method: 'POST'
        }).catch(err => {

        });
    };

    childHandler = () => {
        if(this.props.name) {
            this.handler(this.props.name);
        }
    };

    render(){
        return (
            <Icon
                name={this.props.icon}
                size={Button.defaultProps.largeSize}
                color={Button.defaultProps.color}
                onPress={this.childHandler.bind(this)}
            />
        );
    }
}