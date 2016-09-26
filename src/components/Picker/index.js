import React from 'react';
import {
    PickerIOS,
    Animated,
    View,
    TouchableHighlight,
    Text
} from 'react-native';
import styles from './index.styles';

export class Picker extends React.Component {
    componentDidMount() {
        const offSet = new Animated.Value(this.props.offSet);
        Animated.timing(offSet, {
            duration: 300,
            toValue: 100
        }).start()
    }

    closeModal() {
        const offSet = new Animated.Value(this.props.offSet);
        Animated.timing(offSet, {
            duration: 300,
            toValue: this.props.deviceHeight
        }).start(this.props.closeModal);
    }

    render() {
        const { selected, options, select } = this.props;

        const selection = options.map(item => (
            <PickerIOS.Item
                key={item}
                value={item}
                label={item}
            />
        ));

        return (
            <Animated.View style={{ transform: [{translateY: this.props.offSet}] }}>
                <View style={styles.closeButtonContainer}>
                    <TouchableHighlight onPress={this.closeModal.bind(this)} underlayColor="transparent" style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Choose</Text>
                    </TouchableHighlight>
                </View>
                <PickerIOS
                    itemStyle={styles.item}
                    selectedValue={selected}
                    onValueChange={(item) => select(item)}>
                    {selection}
                </PickerIOS>
            </Animated.View>
        )
    }
}