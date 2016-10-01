import React from 'react';
import { View, ListView, StyleSheet, Image } from 'react-native';
import { ChannelButton } from './../ChannelButton';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    channel: {
        flexDirection: 'row'
    },
    iconWrapper: {
        flex: 1,
        width: 100,
        height: 100,
        margin: 10
    },
    icon: {
        width: 100,
        height: 100,
        resizeMode: Image.resizeMode.contain
    }
});

export class ChannelList extends React.Component {
    constructor(props, context) {
        super(props, context);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.device.channels)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([...nextProps.device.channels])
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ListView
                    contentContainerStyle={styles.grid}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(channel) => <ChannelButton url={this.props.device.url} {...channel} styles={styles} />}
                />
            </View>
        );
    }
}