import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

export class ChannelButton extends React.Component {
    static defaultProps = {
        styles: {},
        icon: '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'
    };

    render(){
        const { id, icon, styles, url } = this.props;
        const source = { uri: `data:image/png;base64,${icon}` };
        const defaultSource = { uri: `data:image/png;base64,${ChannelButton.defaultProps.icon}` };

        const launchApp = () => {
            fetch(`${url}launch/${id}`, {
                method: 'POST'
            }).then(res => {

            }).catch(err => {

            });
        };

        return (
            <View style={styles.iconWrapper}>
                <TouchableHighlight onPress={() => { launchApp(); }}>
                    <Image style={styles.icon} source={source} defaultSource={defaultSource}/>
                </TouchableHighlight>
            </View>
        );
    }
}