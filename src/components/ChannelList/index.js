import React from 'react';
import { Text, View, ListView, Image } from 'react-native';
import styles from './index.styles';

export class Channel extends React.Component {
    render() {
        const { id, name, icon, launchApp } = this.props;
        const base64Icon = icon
            ? `data:image/png;base64,${icon}`
            : 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCADaASIDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHBAUIAwIB/8QAThAAAQMDAgMEBAkJBAYLAAAAAQACAwQFEQYHEiExCBNBUWFxgZEUIjJic6GxssEVFiMzQlJygoM0NXTRCSQlNmOSNzhDREVTdaKz4fD/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQMCBQYEB//EADQRAAIBAgQCBQsFAQAAAAAAAAABAgMRBAUSITGxE0KBkaEGIjI0QVFhccHR4RQVJFLw8f/aAAwDAQACEQMRAD8A5cREWzNEEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERe9uo6ivrYqOljMk0ruFoCmMXJ2XEiUlFNvgeC/MjzC6P2+2d09RUsdTqZj66pcATCDhrVZtNpfbyOEQ/mnScIGObn59/Eth+3yXpPuV/qjX/ALhGXorb4u30ZxIi6+vO0+2N0LnMt9RQvdzzC8EA+0Z+tQa89ny2uLnWfUfL9ls7C0/j9oWDwE+q/p+PEzWPj1l3b/nwOekVnXnZLWFCXGnbT1jR0Mbxk/aobc9Ialtry2ss9VHg9eDkqpYStHq92/ItjjKEut37czRovuaKWF3DNE+M+T2kfavhedq2zPSmnugiIoAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBWVsDQRy6inuErA74MwcBI6H/9hVqrR2Om7mnuLs4y9o+pbDK4KeJivnyNdm09GFk/lzL0bX/OXo2u+com2v8AnKM661nU6cNNJFC2dkx4SCcY6rpKlONOLlPZI5mlVnVkoQ3bLVbXfOXo2u+cqOo936Yn/WrdOz0sId+IW5pN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'

        return (
            <View style={styles.channel}>
                <View style={styles.iconWrapper}>
                    <Image style={styles.icon} source={{uri: base64Icon}}/>
                </View>
                <View style={styles.labelWrapper}>
                    <Text style={styles.label} onPress={() => { launchApp(id); }}>{id} {name}</Text>
                </View>
            </View>
        );
    }
}

export class ChannelList extends React.Component {
    constructor(props, context) {
        super(props, context);
        const rowHasChanged = (r1, r2) => (
            r1.icon !== r2.icon
            || r1.id !== r2.id
        );
        const ds = new ListView.DataSource({ rowHasChanged: rowHasChanged });
        this.state = {
            dataSource: ds.cloneWithRows(props.atom.channels)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([...nextProps.atom.channels])
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(channel) => <Channel {...channel} launchApp={this.props.launchApp} />}
                />
            </View>
        );
    }
}