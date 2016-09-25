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
        const dot= <View style={{backgroundColor:'rgba(168, 94, 245,0.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
        const activeDot= <View style={{backgroundColor: '#A85EF5', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
        return (
            <Animatable.View refs="app" animation="fadeIn" duration={800} style={styles.wrapper}>
                <Swiper style={styles.swiper}
                        height={680}
                        horizontal={true}
                        autoplay={false}
                        index={1}
                        dot={dot}
                        activeDot={activeDot}>
                    <View style={styles.slide3}>
                        <Settings {...this.props} />
                    </View>
                    <View style={styles.slide1}>
                        <Remote {...this.props} />
                    </View>
                    <View style={styles.slide2}>
                        <ChannelList {...this.props} />
                    </View>
                </Swiper>
            </Animatable.View>
        );
    }
}