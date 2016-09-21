import React from 'react';
import { View, Text } from 'react-native';

export class HotButtons extends React.Component {
    render(){
        const { hotButtons, launchApp } = this.props;
        const buttons = hotButtons.map(button => (
            <Text key={button.id} onPress={() => { launchApp(id); }}>{button.name}</Text>
        ));
        return (
            <View>
                {buttons}
            </View>
        );
    }
}