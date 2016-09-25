import React from 'react';
import { Text, View } from 'react-native';

export class Roku extends React.Component {
    selectDevice = () => {
        debugger;
    };

    render() {
        const { url } = this.props;
        return (
            <View>
                <Text style={{color: '#fff'}} onPress={this.selectDevice.bind(this)}>{url}</Text>
            </View>
        );
    }
}

export class Settings extends React.Component {
    render(){
        const { rokus, device, selectDevice } = this.props;
        const rokuUrls = rokus.map(url => <Roku key={url} url={url} selectDevice={selectDevice} />);

        return (
            <View>
                <Text style={{color: '#fff'}}> Selected: {device.url}</Text>
                {rokuUrls}
            </View>
        );
    }
}