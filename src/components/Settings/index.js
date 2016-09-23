import React from 'react';
import { Text, View } from 'react-native';

export class Settings extends React.Component {
    render(){
        const { atom, selectedDeviceHydrated } = this.props;
        const { rokus } = atom;
        const rokuUrls = rokus.map(device => <Text style={{color: '#fff'}} key={device.url}>{device.url}</Text>);

        return (
            <View>
                <Text style={{color: '#fff'}}> Selected: {selectedDeviceHydrated.url}</Text>
                {rokuUrls}
            </View>
        );
    }
}