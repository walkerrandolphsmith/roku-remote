import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {StyleSheet, Text, View} from 'react-native';
import { actions, selectors } from './../../common/modules';

import {
    AsteriskButton,
    BackButton,
    DownButton,
    HomeButton,
    LeftButton,
    OkButton,
    RightButton,
    SearchButton,
    UpButton,
    FastForwardButton,
    RewindButton,
    PlayButton
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
        const { keys, rokus } = this.props.atom;
        const { selectedDevice, keyPress } = this.props;
        const rokuUrls = rokus.map(device => <Text key={device.url}>{device.url}</Text>);
        return (
            <View style={styles.container}>
                {/*<Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>*/}
                <Text>selected: {selectedDevice.url}</Text>
                {rokuUrls}
                <HomeButton keyPress={keyPress} { ...keys} />
                <RewindButton keyPress={keyPress} { ...keys} />
                <FastForwardButton keyPress={keyPress} { ...keys} />
                <PlayButton keyPress={keyPress} { ...keys} />
                <BackButton keyPress={keyPress} { ...keys} />
                <DownButton keyPress={keyPress} { ...keys} />
                <UpButton keyPress={keyPress} { ...keys} />
                <LeftButton keyPress={keyPress} { ...keys} />
                <RightButton keyPress={keyPress} { ...keys} />
                <OkButton keyPress={keyPress} { ...keys} />
                <SearchButton keyPress={keyPress} { ...keys} />
                <AsteriskButton keyPress={keyPress} { ...keys} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const selectedDevice = selectors.getSelectedDevice(state);
    return { ...state, selectedDevice };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(_App);