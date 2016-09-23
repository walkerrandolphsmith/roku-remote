import React from 'react';
import { View, ListView } from 'react-native';
import { ChannelButton } from './../ChannelButton';
import styles from './index.styles';

export class ChannelList extends React.Component {
    constructor(props, context) {
        super(props, context);
        const rowHasChanged = (r1, r2) => (
            r1.icon !== r2.icon
            || r1.id !== r2.id
        );
        const ds = new ListView.DataSource({ rowHasChanged: rowHasChanged });
        this.state = {
            dataSource: ds.cloneWithRows(props.atom.channels)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([...nextProps.atom.channels])
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(channel) => <ChannelButton {...channel} styles={styles} launchApp={this.props.launchApp} />}
                />
            </View>
        );
    }
}