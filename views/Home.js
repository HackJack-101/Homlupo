import React from 'react';
import {StatusBar, View, Text, TouchableHighlight, Platform} from 'react-native';
import style from './../Style';
import Button from 'apsl-react-native-button';


export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Bienvenue dans le village',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={style.home.container}>
                <View style={style.home.titleView}>
                    <Text style={style.home.titleText}>Tu es :</Text>
                </View>
                <View style={style.home.actionView}>
                    <Button style={[style.button.generic, {backgroundColor: style.colors.softRed}]} textStyle={style.button.light}
                            onPress={() => navigate('GameMasterHome')}>
                        Un maitre du jeu
                    </Button>
                    <Button style={[style.button.generic, {backgroundColor: style.colors.softBlue}]} textStyle={style.button.light}
                            onPress={() => navigate('PlayerHome')}>
                        Un joueur
                    </Button>
                </View>
            </View>
        );
    }
}