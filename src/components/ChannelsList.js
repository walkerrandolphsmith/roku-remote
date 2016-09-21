import React from 'react';
import { Text, View } from 'react-native';

export class ChannelsList extends React.Component {
    render(){
        const { channels } = this.props.atom;
        const channelList = channels.map(channel => <Text key={channel.id}>{channel.id} {channel.name}</Text>);
        return (
            <View>
                {channelList}
            </View>
        );
    }
}