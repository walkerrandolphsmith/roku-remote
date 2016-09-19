import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {StyleSheet, Text, View} from 'react-native';
import { actions } from './../../common/modules';

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
                <HomeButton { ...keys} />
                <BackButton { ...keys} />
                <DownButton { ...keys} />
                <UpButton { ...keys} />
                <LeftButton { ...keys} />
                <RightButton { ...keys} />
                <OkButton { ...keys} />
                <SearchButton { ...keys} />
                <AsteriskButton { ...keys} />
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