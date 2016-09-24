import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { actions, selectors } from './../shared/modules';
import { Remote } from './Remote';
import { ChannelList } from './ChannelList';
import { Settings } from './Settings';
import styles from './App.styles';
import SplashScreen from "rn-splash-screen";

class _App extends React.Component {
    componentDidMount() {
        this.props.onLoad().then(hasLoaded => {
            SplashScreen.hide();
        });
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.selectedDevice !== nextProps.selectedDevice) {
            this.props.getRokuDetails();
            debugger;
        }
    }


    render(){
        const dot= <View style={{backgroundColor:'rgba(168, 94, 245,0.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
        const activeDot= <View style={{backgroundColor: '#A85EF5', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
        return (
            <View>
                <Swiper style={styles.wrapper}
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
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const hotButtons = selectors.getHotButtons(state);
    console.log(hotButtons);
    const selectedDeviceHydrated = selectors.getSelectedDevice(state);
    return { ...state, selectedDeviceHydrated, hotButtons };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(_App);