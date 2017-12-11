import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigator from './Navigator';

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar barStyle="light-content" backgroundColor="black"/>
                <Navigator/>
            </View>
        );
    }
}
