import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ChannelButton } from './../../ChannelButton';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10
    },
    iconWrapper: {

    },
    icon: {
        width: 120,
        height: 80,
        resizeMode: Image.resizeMode.contain,
        marginBottom: 10
    }
});

export class HotButtons extends React.Component {
    render(){
        const { device } = this.props;
        const hotButtons = device.hotButtons.map((button, i) =>
            <ChannelButton key={i} url={device.url} {...button} styles={styles} />
        );
        return (
            <View style={styles.wrapper}>
                {hotButtons}
            </View>
        );
    }
}