import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ControlButtons } from './ControlButtons';
import { NavigationButtons } from './NavigationButtons';
import { AsteriskButton, BackButton, HomeButton, SearchButton } from './RemoteButtons';
import { HotButtons } from './HotButtons';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30
    },

    large: {
        width: 280,
        height: 280,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    topLeft: {
        position: 'absolute',
        left: 25,
        top: 25
    },

    topRight: {
        position: 'absolute',
        right: 25,
        top: 25
    },

    bottomLeft: {
        position: 'absolute',
        left: 25,
        bottom: 25
    },

    bottomRight: {
        position: 'absolute',
        right: 25,
        bottom: 25
    },

    controlButtons: {
        height: 50,
        marginBottom: 10
    },

    hotButtons: {
        height: 180
    }
});

export class Remote extends React.Component {
    render(){
        const { device } = this.props;
        const { wrapper, large, topLeft, topRight, bottomLeft, bottomRight, controlButtons, hotButtons } = styles;
        return (
            <View>
                <View style={wrapper}>
                    <View style={large}>
                        <View style={topLeft}>
                            <BackButton url={device.url} />
                        </View>
                        <View style={topRight}>
                            <HomeButton url={device.url} />
                        </View>
                        <NavigationButtons {...device} />
                        <View style={bottomLeft}>
                            <SearchButton url={device.url} />
                        </View>
                        <View style={bottomRight}>
                            <AsteriskButton url={device.url} />
                        </View>
                    </View>
                </View>
                <View style={controlButtons}>
                    <ControlButtons {...device} />
                </View>
                <View style={hotButtons}>
                    <HotButtons device={device} />
                </View>
            </View>
        );
    }
}