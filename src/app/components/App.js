import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import broadcastSsdp from './../../common/broadcastSsdp';
import {
    AsteriskButton,
    BackButton,
    DownButton,
    HomeButton,
    LeftButton,
    OkButton,
    RightButton,
    SearchButton,
    UpButton
} from './RemoteButtons';

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default class App extends React.Component {
    state = {
        rokuUrls: []
    };

    componentDidMount() {
        broadcastSsdp().then(rokuUrls => {
            const uniqueUrls = [...new Set(this.state.rokuUrls.concat(rokuUrls))];
            this.setState({ rokuUrls:  uniqueUrls });
        });
    }


    render(){
        const rokuUrls = this.state.rokuUrls.map(url => <Text key={url}>{url}</Text>);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!!!!!!!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit Component
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                {rokuUrls}
                <HomeButton />
                <BackButton />
                <DownButton />
                <UpButton />
                <LeftButton />
                <RightButton />
                <OkButton />
                <SearchButton />
                <AsteriskButton />
            </View>
        );
    }
}