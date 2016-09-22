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
        const { atom, keyPress, hotButtons, launchApp } = this.props;
        const { keys } = atom;

        const largeWrapper = {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 60
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

        return (
            <View>
                <View style={largeWrapper}>
                    <View style={large}>
                        <View style={topLeft}>
                            <BackButton keyPress={keyPress} { ...keys} />
                        </View>
                        <View style={topRight}>
                            <HomeButton keyPress={keyPress} { ...keys} />
                        </View>
                        <NavigationButtons keyPress={keyPress} keys={keys} />
                        <View style={bottomLeft}>
                            <SearchButton keyPress={keyPress} { ...keys} />
                        </View>
                        <View style={bottomRight}>
                            <AsteriskButton keyPress={keyPress} { ...keys} />
                        </View>
                    </View>
                </View>
                <ControlButtons keyPress={keyPress} keys={keys} />
                <HotButtons hotButtons={hotButtons} launchApp={launchApp} />
            </View>
        );
    }
}