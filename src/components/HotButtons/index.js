import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './index.styles';

export class HotButtons extends React.Component {
    render(){
        const { hotButtons, launchApp } = this.props;
        const buttons = hotButtons.map(button => {
            const base64Icon = `data:image/png;base64,${button.icon}`;
            return (
                <View style={styles.wrapper} key={button.id}>
                    <View style={styles.iconWrapper}>
                        <Image style={styles.icon} source={{uri: base64Icon}}/>
                    </View>
                    <View style={styles.labelWrapper}>
                        <Text style={styles.label} onPress={() => { launchApp(id); }}>{button.name}</Text>
                    </View>
                </View>
            )
        });
        return (
            <View>
                {buttons}
            </View>
        );
    }
}