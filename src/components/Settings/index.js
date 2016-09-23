import React from 'react';
import { Text, View } from 'react-native';

export class Roku extends React.Component {
    selectDevice = () => {
        this.props.selectDevice(this.props.url);
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
        const { atom, selectedDeviceHydrated, selectDevice } = this.props;
        const rokuUrls = atom.rokus.map(device => <Roku key={device.url} {...device} selectDevice={selectDevice} />);

        return (
            <View>
                <Text style={{color: '#fff'}}> Selected: {selectedDeviceHydrated.url}</Text>
                {rokuUrls}
            </View>
        );
    }
}