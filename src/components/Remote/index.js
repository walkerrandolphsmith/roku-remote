import React from 'react';
import { Text, View } from 'react-native';
import { ControlButtons } from './ControlButtons';
import { NavigationButtons } from './NavigationButtons';
import {
    AsteriskButton,
    BackButton,
    HomeButton,
    SearchButton
} from './RemoteButtons';
import { HotButtons } from './HotButtons';

export class Remote extends React.Component {
    render(){
        const { device } = this.props;

        const largeWrapper = {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 30
        };

        const large = {
            width: 280,
            height: 280,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        };

        const topLeft = {
            position: 'absolute',
            left: 25,
            top: 25
        };

        const topRight = {
            position: 'absolute',
            right: 25,
            top: 25
        };

        const bottomLeft = {
            position: 'absolute',
            left: 25,
            bottom: 25
        };

        const bottomRight = {
            position: 'absolute',
            right: 25,
            bottom: 25
        };

        const controlButtonStyles = {
            height: 50,
            marginBottom: 10
        };

        const hotButtonStyles = {
            height: 180
        };

        return (
            <View>
                <View style={largeWrapper}>
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
                <View style={controlButtonStyles}>
                    <ControlButtons {...device} />
                </View>
                <View style={hotButtonStyles}>
                    <HotButtons device={device} />
                </View>
            </View>
        );
    }
}