import React from 'react';
import { View, ListView } from 'react-native';
import { ChannelButton } from './../ChannelButton';
import styles from './index.styles';

export class ChannelList extends React.Component {
    constructor(props, context) {
        super(props, context);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.channels)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([...nextProps.channels])
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ListView
                    contentContainerStyle={styles.grid}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(channel) => <ChannelButton {...channel} styles={styles} />}
                />
            </View>
        );
    }
}