import React from 'react'
import { View, StyleSheet } from 'react-native';
import App from './App';
import Loading from './Loading';
import Error from './Error';
import { onLoad } from './../onLoad';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 680
    }
});

export default class Main extends React.Component {
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
            message: state.message,
            device:  state.device,
            rokus: state.rokus
        });
    };

    render(){
        let component = <Loading />;
        if(!this.state.isLoading) {
            component = this.state.message ? <Error message={this.state.message} /> : <App {...this.state} />;
        }
        return (
            <View style={styles.main}>
                {component}
            </View>
        )
    }
}