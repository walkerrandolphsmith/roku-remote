import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './index.styles';

export class HotButtons extends React.Component {
    render(){
        const { hotButtons, launchApp } = this.props;
        const buttons = hotButtons.map(button => {
            const base64Icon = `data:image/png;base64,${button.icon}`;
            return (
                <View style={styles.iconWrapper} key={button.id}>
                    <TouchableHighlight onPress={() => { launchApp(button.id); }}>
                        <Image style={styles.icon} source={{uri: base64Icon}} onPress={() => { launchApp(id); }} />
                    </TouchableHighlight>
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