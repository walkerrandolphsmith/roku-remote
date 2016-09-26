import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Picker } from './../Picker';
import styles from './index.styles';

export class Settings extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            modal: false,
            offSet: 0,
            selected: props.device.url
        }
    }

    openModal = () => {
        this.setState({ modal: true });
    };

    closeModal = () => {
        this.setState({ modal: false });
    };

    select = (roku) => {
        this.setState({ selected: roku });
    };

    render(){
        const { rokus } = this.props;
        const { modal, offSet, selected } = this.state;
        const options = rokus.concat(["another url", "more rokus"]);

        const picker = modal
            ? <Picker closeModal={this.closeModal}
                      offSet={offSet}
                      select={this.select}
                      selected={selected}
                      options={options}
                      deviceHeight={Dimensions.get('window').height}
              />
            : null;

        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} underlayColor="transparent" onPress={this.openModal}>
                    <Text style={styles.buttonText}>
                        CLICK TO SHOW PICKER
                    </Text>
                </TouchableHighlight>
                <View style={styles.selectedWrapper}>
                    <Text style={styles.selected}>
                        Selected: {selected}
                    </Text>
                </View>
                {picker}
            </View>
        );
    }
}