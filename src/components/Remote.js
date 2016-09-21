import React from 'react';
import { View } from 'react-native';
import {
    AsteriskButton,
    BackButton,
    DownButton,
    HomeButton,
    LeftButton,
    OkButton,
    RightButton,
    SearchButton,
    UpButton,
    FastForwardButton,
    RewindButton,
    PlayButton
} from './RemoteButtons';

export class Remote extends React.Component {
    render(){
        const { atom, keyPress } = this.props;
        const { keys } = atom;
        return (
            <View>
                <HomeButton keyPress={keyPress} { ...keys} />
                <RewindButton keyPress={keyPress} { ...keys} />
                <FastForwardButton keyPress={keyPress} { ...keys} />
                <PlayButton keyPress={keyPress} { ...keys} />
                <BackButton keyPress={keyPress} { ...keys} />
                <DownButton keyPress={keyPress} { ...keys} />
                <UpButton keyPress={keyPress} { ...keys} />
                <LeftButton keyPress={keyPress} { ...keys} />
                <RightButton keyPress={keyPress} { ...keys} />
                <OkButton keyPress={keyPress} { ...keys} />
                <SearchButton keyPress={keyPress} { ...keys} />
                <AsteriskButton keyPress={keyPress} { ...keys} />
            </View>
        );
    }
}