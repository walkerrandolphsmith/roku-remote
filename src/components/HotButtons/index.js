import React from 'react';
import { View, Text } from 'react-native';

export class HotButtons extends React.Component {
    render(){
        const { hotButtons } = this.props;
        const buttons = hotButtons.map(button => <Text key={button.id}>{button.name}</Text>);
        return (
            <View>
                {buttons}
            </View>
        );
    }
}