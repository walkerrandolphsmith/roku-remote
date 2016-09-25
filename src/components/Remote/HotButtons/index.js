import React from 'react';
import { View } from 'react-native';
import { ChannelButton } from './../../ChannelButton';
import styles from './index.styles';

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