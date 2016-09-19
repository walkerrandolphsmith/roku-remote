import React from 'react';

export default class HomeButton extends React.Component {

    static defaultProps = {
        label: 'Button',
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
        loading: false
    };

    handler = () => {
        this.setState({ loading: true });
        setTimeout(() => this.setState({ loading: false }), 500);
    };

    getLabel = () => {
        return this.state.loading ? 'Loading' : this.props.label;
    };
}