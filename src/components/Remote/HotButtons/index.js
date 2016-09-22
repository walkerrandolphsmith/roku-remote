import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './index.styles';

export class HotButtons extends React.Component {
    render(){
        const { hotButtons, launchApp } = this.props;
        const buttons = hotButtons.map(button => {
            const base64Icon = `data:image/png;base64,${button.icon}`;
            return (
                <View style={styles.iconWrapper} key={button.id}>
                    <Image style={styles.icon} source={{uri: base64Icon}} onPress={() => { launchApp(id); }} />
                </View>
            )
        });
        return (
            <View style={styles.wrapper}>
                {buttons}
            </View>
        );
    }
}