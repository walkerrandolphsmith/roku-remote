import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from './../RemoteButton';

const styles = StyleSheet.create({
    small: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: 200,
        height: 200,
        transform: [{ rotate: '45deg'}],
        justifyContent: 'center'
    },
    up: {
        position: 'absolute',
        left: 0,
        top: 0,
        transform: [{ rotate: '315deg'}]
    },
    down: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        transform: [{ rotate: '315deg'}]
    },
    right: {
        position: 'absolute',
        right: 0,
        top: 0,
        transform: [{ rotate: '315deg'}]
    },
    left: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        transform: [{ rotate: '315deg'}]
    },
    iconWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'transparent'
    },
    okWrapper: {
        position: 'absolute',
        top: 50,
        left: 50,
        transform: [{ rotate: '315deg'}],
        width: 90,
        height: 90,
        borderRadius: 90,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    ok: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export class NavigationButtons extends React.Component {
    render(){
        const { url } = this.props;
        const { small, iconWrapper, okWrapper, ok, up, down, right, left } = styles;
        return (
            <View style={small}>
                <View style={right}>
                    <View style={iconWrapper}>
                        <Button name="Right" icon="angle-right" url={url} />
                    </View>
                </View>

                <View style={left}>
                    <View style={iconWrapper}>
                        <Button name="Left" icon="angle-left" url={url} />
                    </View>
                </View>

                <View style={okWrapper}>
                    <View style={ok}>
                        <Button name="Select" icon="circle" url={url} />
                    </View>
                </View>

                <View style={up}>
                    <View style={iconWrapper}>
                        <Button name="Up" icon="angle-up" url={url} />
                    </View>
                </View>

                <View style={down}>
                    <View style={iconWrapper}>
                        <Button name="Down" icon="angle-down" url={url} />
                    </View>
                </View>
            </View>
        );
    }
}
