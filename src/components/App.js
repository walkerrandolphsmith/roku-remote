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

class _App extends React.Component {
    componentDidMount() {
        this.props.getRokuDevices();
        this.props.getRokuDetails();
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.selectedDevice !== nextProps.selectedDevice) {
            this.props.getRokuDetails();
            debugger;
        }
    }


    render(){
        return (
            <View>
                <Swiper style={styles.wrapper} height={680} horizontal={true} autoplay={false}>
                    <View style={styles.slide3}>
                        <Remote {...this.props} />
                    </View>
                    <View style={styles.slide2}>
                        <ChannelList {...this.props} />
                    </View>
                    <View style={styles.slide3}>
                        <Settings {...this.props} />
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