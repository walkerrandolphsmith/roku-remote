import React from 'react';
import { Text, View } from 'react-native';
import {
    DownButton,
    LeftButton,
    OkButton,
    RightButton,
    UpButton
} from './../RemoteButtons';
import styles from './index.styles';

export class NavigationButtons extends React.Component {
    render(){
        const { url } = this.props;
        const { small, iconWrapper, okWrapper, ok, up, down, right, left } = styles;
        return (
            <View style={small}>
                <View style={right}>
                    <View style={iconWrapper}>
                        <RightButton url={url} />
                    </View>
                </View>

                <View style={left}>
                    <View style={iconWrapper}>
                        <LeftButton url={url} />
                    </View>
                </View>

                <View style={okWrapper}>
                    <View style={ok}>
                        <OkButton url={url} />
                    </View>
                </View>

                <View style={up}>
                    <View style={iconWrapper}>
                        <UpButton url={url} />
                    </View>
                </View>

                <View style={down}>
                    <View style={iconWrapper}>
                        <DownButton url={url} />
                    </View>
                </View>
            </View>
        );
    }
}
