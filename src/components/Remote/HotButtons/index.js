import React from 'react';
import { View } from 'react-native';
import { ChannelButton } from './../../ChannelButton';
import styles from './index.styles';

export class HotButtons extends React.Component {
    render(){
        const hotButtons = this.props.hotButtons.map((button, i) =>
            <ChannelButton key={i} {...button} styles={styles} />
        );
        return (
            <View style={styles.wrapper}>
                {hotButtons}
            </View>
        );
    }
}