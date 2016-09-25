import React from 'react'
import { Component } from 'react-native';
import App from './App';
import Loading from './Loading';
import { onLoad } from './../onLoad';

export default class Main extends React.Component {
    static defaultProps = {
        style: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
            height: 680
        }
    };

    constructor(props, context) {
        super(props, context);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        onLoad().then(hasLoaded => {
            this.setState({ isLoading: false });
        });
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.selectedDevice !== nextProps.selectedDevice) {
            //Update State
        }
    }

    render(){
        const component = this.state.isLoading ? <Loading /> : <App {...this.props} />;
        return (
            <View style={Main.defaultProps.style}>
                {component}
            </View>
        )
    }
}