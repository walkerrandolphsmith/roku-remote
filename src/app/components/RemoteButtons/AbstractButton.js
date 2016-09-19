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

    handler = (baseUrl, key) => {
        this.setState({ loading: true });
        fetch(`${baseUrl}/keypress/${key}`, {
            method: 'POST'
        }).then((res) => {
            res.text().then(xmlString => {

            });
            this.setState({ loading: false });
        }).catch(err => {
            console.log('err', err);
        });
    };

    getLabel = () => {
        return this.state.loading ? 'Loading' : this.props.label;
    };
}