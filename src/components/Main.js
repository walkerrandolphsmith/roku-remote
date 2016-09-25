import React from 'react'
import { View } from 'react-native';
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
        this.state = {
            isLoading: true,
            device: null,
            rokus: null
        };
    }

    componentDidMount() {
        this.load.bind(this)();
    }

    load = async () => {
        const state = await onLoad();
        this.setState({
            isLoading: false,
            device:  state.device,
            rokus: state.rokus
        });
    };

    render(){
        const component = this.state.isLoading ? <Loading /> : <App {...this.state} />;
        return (
            <View style={Main.defaultProps.style}>
                {component}
            </View>
        )
    }
}