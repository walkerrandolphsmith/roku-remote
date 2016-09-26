import React from 'react';
import { View, Text, Easing } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import { Remote } from './Remote';
import { ChannelList } from './ChannelList';
import { Settings } from './Settings';
import styles from './App.styles';

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