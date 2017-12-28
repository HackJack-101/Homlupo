import React from 'react';
import {View, Text, Platform, StatusBar, TouchableHighlight} from 'react-native';
import style from './../Style';
import {LinearGradient} from 'expo';
import NavigationBar from 'react-native-navbar';

export default class PlayerOptions extends React.Component {
    static navigationOptions = ({navigation}) => {
        let title = 'Choix du mode';
        return {
            title,
            header: (
                <View
                    style={{
                        paddingTop: (Platform.OS === "android") ? StatusBar.currentHeight : 0,
                        backgroundColor: style.colors.linearGradient.start
                    }}>
                    <NavigationBar
                        title={{title, tintColor: "#F1D7C5", style: {fontFamily: 'spectralSC', fontSize: 20}}}
                        tintColor={"transparent"}
                    />
                </View>
            )
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LinearGradient style={{flex: 1}} colors={['#0A1620', '#201F43']}>
                <View style={style.options.container}>
                    <TouchableHighlight
                        style={style.options.button}
                        onPress={() => this.props.navigation.navigate('PlayerHome', {advanced: false, debug: false})}
                        underlayColor={'rgba(255,255,255,0.1)'}>
                        <View style={{backgroundColor: 'transparent'}}>
                            <Text style={style.gameMasterOptions.buttonText}>Joueur débutant</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={style.options.button}
                        onPress={() => this.props.navigation.navigate('PlayerHome', {advanced: true, debug: false})}
                        underlayColor={'rgba(255,255,255,0.1)'}>
                        <View style={{backgroundColor: 'transparent'}}>
                            <Text style={style.gameMasterOptions.buttonText}>Joueur expérimenté</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={style.options.button}
                        onPress={() => this.props.navigation.navigate('PlayerHome', {advanced: true, debug: true})}
                        underlayColor={'rgba(255,255,255,0.1)'}>
                        <View style={{backgroundColor: 'transparent'}}>
                            <Text style={style.gameMasterOptions.buttonText}>Mode debug</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </LinearGradient>
        );
    }
}