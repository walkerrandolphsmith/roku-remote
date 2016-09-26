import React from 'react';
import { Text, View } from 'react-native';
import { ControlButtons } from './ControlButtons';
import { NavigationButtons } from './NavigationButtons';
import { AsteriskButton, BackButton, HomeButton, SearchButton } from './RemoteButtons';
import { HotButtons } from './HotButtons';
import styles from './index.styles';

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