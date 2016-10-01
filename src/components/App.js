import React from 'react';
import { View, Text, Easing, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import { Remote } from './Remote';
import { ChannelList } from './ChannelList';
import { Settings } from './Settings';

const styles = StyleSheet.create({
    remote: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30,
        alignItems: 'center'
    },
    channels: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    settings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        backgroundColor:'rgba(168, 94, 245,0.5)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot: {
        backgroundColor: '#A85EF5',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }
});

export default class App extends React.Component {
    render(){
        const dot= <View style={styles.dot} />;
        const activeDot= <View style={styles.activeDot} />;
        return (
            <Animatable.View refs="app" animation="fadeIn" duration={800}>
                <Swiper height={680}
                        horizontal={true}
                        autoplay={false}
                        index={1}
                        dot={dot}
                        activeDot={activeDot}>
                    <View style={styles.settings}>
                        <Settings {...this.props} />
                    </View>
                    <View style={styles.remote}>
                        <Remote {...this.props} />
                    </View>
                    <View style={styles.channels}>
                        <ChannelList {...this.props} />
                    </View>
                </Swiper>
            </Animatable.View>
        );
    }
}