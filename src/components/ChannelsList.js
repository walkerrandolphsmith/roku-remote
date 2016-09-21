import React from 'react';
import { Text, View, ListView } from 'react-native';
import styles from './ChannelList.styles';

export class Channel extends React.Component {
    render() {
        const { id, name, launchApp } = this.props;
        return (
            <View style={styles.channel}>
                <Text onPress={() => { launchApp(id); }}>{name}</Text>
            </View>
        );
    }
}

export class ChannelsList extends React.Component {
    constructor(props, context) {
        super(props, context);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.atom.channels)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.atom.channels)
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(channel) => <Channel {...channel} launchApp={this.props.launchApp} />}
                />
            </View>
        );
    }
}