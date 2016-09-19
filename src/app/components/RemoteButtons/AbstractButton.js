import React from 'react';

export default class AbstractButton extends React.Component {

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

    handler = (key) => {
        this.props.keyPress(key);
    };

    getLabel = () => {
        return this.state.loading ? 'Loading' : this.props.label;
    };
}