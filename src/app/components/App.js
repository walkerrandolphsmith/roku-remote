import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {StyleSheet, Text, View} from 'react-native';
import * as actions from './../../common/modules';

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

class _App extends React.Component {
    state = {
        rokuUrls: []
    };

    componentDidMount() {
        this.props.getRokuDevices();
    }


    render(){
        const rokuUrls = this.props.atom.rokus.map(url => <Text key={url}>{url}</Text>);
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

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(_App);