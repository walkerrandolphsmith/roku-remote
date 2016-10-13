import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './../RemoteButton';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        height: 50
    },
    play: {
        marginLeft: 80,
        marginRight: 80
    }
});

export class ControlButtons extends React.Component {
    render(){
        const { url } = this.props;
        return (
            <View style={styles.wrapper}>
                <View>
                    <Button name="Rev" icon="backward" url={url} />
                </View>
                <View style={styles.play}>
                    <Button name="Play" icon="play" url={url} />
                </View>
                <View>
                    <Button name="Fwd" icon="forward" url={url} />
                </View>
            </View>
        );
    }
}