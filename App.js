import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigator from './Navigator';
import {AppLoading, Font} from 'expo';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoadingComplete: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'berkshire-swash': require('./assets/fonts/BerkshireSwash-Regular.ttf'),
            'spectralSC': require('./assets/fonts/SpectralSC-Regular.ttf'),
            'EBGaramond-regular': require('./assets/fonts/EBGaramond-Regular.ttf'),
            'EBGaramond-xBold': require('./assets/fonts/EBGaramond-ExtraBold.ttf'),
            'EBGaramond-xBoldItalic': require('./assets/fonts/EBGaramond-ExtraBoldItalic.ttf'),
        });
        this.setState({isLoadingComplete: true});
    }

    render() {
        if (!this.state.isLoadingComplete) {
            return (<AppLoading/>);
        } else {

            return (
                <View style={{flex: 1}}>
                    <StatusBar barStyle="light-content"/>
                    <Navigator/>
                </View>
            );
        }
    }
}
