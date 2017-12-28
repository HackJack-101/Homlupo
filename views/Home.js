import React from 'react';
import {Image, View, Text, TouchableHighlight, Platform, StatusBar} from 'react-native';
import style from './../Style';
import {LinearGradient} from 'expo';
import Separator from './../components/Separator';
import NavigationBar from 'react-native-navbar';


export default class Home extends React.Component {
    static navigationOptions = () => {
        let title = 'Bienvenue dans le village';
        return {
            title,
            header: (
                <View
                    style={{
                        paddingTop: (Platform.OS === "android") ? StatusBar.currentHeight : 0,
                        backgroundColor: style.colors.linearGradient.start
                    }}>
                    <NavigationBar
                        title={{title, tintColor: "#F1D7C5", style:{fontFamily: 'spectralSC', fontSize: 18}}}
                        tintColor={"transparent"}
                    />
                </View>
            )
        }
    };

    constructor(props) {
        super(props);
    }

    goToGameMasterHome = () => {
        this.props.navigation.navigate('GameMasterOptions');
    };

    goToPlayer = () => {
        this.props.navigation.navigate('PlayerOptions');
    };

    render() {
        return (
            <LinearGradient style={{flex: 1}} colors={[style.colors.linearGradient.start, style.colors.linearGradient.end]}>
                <View style={style.container}>
                    <View style={style.home.container}>
                        <TouchableHighlight onPress={this.goToGameMasterHome} style={style.home.gameMasterButton} underlayColor={'rgba(255,255,255,0.1)'}>
                            <View style={[style.home.buttonView, {paddingBottom:20}]}>
                                <View/>
                                <Image style={{width: 170, height: 110}} source={require('./../assets/icons/book-512.png')}/>
                                <Text style={{color: '#C0C48A', fontWeight: 'bold', fontSize: 36, fontFamily: 'berkshire-swash'}}>
                                    Maitre du jeu
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <Separator color={'#7A7A94'} height={3}/>
                        <TouchableHighlight onPress={this.goToPlayer} style={style.home.playerButton} activeOpacity={1} underlayColor={'rgba(255,255,255,0.1)'}>
                            <View style={[style.home.buttonView, {paddingTop:20}]}>
                                <Text style={{color: '#F3D8C4', fontWeight: 'bold', fontSize: 36, fontFamily: 'berkshire-swash'}}>
                                    Joueur
                                </Text>
                                <Image style={{width: 150, height: 150}} source={require('./../assets/icons/torch-512.png')}/>
                                <View/>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}