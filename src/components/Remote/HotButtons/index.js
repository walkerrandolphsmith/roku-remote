import React from 'react';
import { View } from 'react-native';
import { ChannelButton } from './../../ChannelButton';
import styles from './index.styles';

export class HotButtons extends React.Component {
    render(){
        const { hotButtons, launchApp } = this.props;
        const buttons = hotButtons.map((button, i) =>
            <ChannelButton key={i} {...button} styles={styles} launchApp={launchApp} />
        );
        return (
            <View style={styles.wrapper}>
                {buttons}
            </View>
        );
    }
}