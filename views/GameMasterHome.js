import React from 'react';
import {View, Text, Platform, StatusBar, ScrollView, TouchableHighlight} from 'react-native';
import style from './../Style';
import AwesomeButton from 'react-native-awesome-button';
import axios from 'axios';
import {LinearGradient} from 'expo';
import NavigationBar from 'react-native-navbar';
import Characters from './../data/Characters';
import Separator from './../components/Separator';

export default class GameMasterHome extends React.Component {
    static navigationOptions = ({navigation}) => {
        let title = 'Préparation des cartes';
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
        this.state = {
            buttonState: 'idle',
            characters: []
        };
        this.availableCharacters = [
            {
                title: 'Villageois',
                color: '#9BC089',
                data: Characters.townFolks
            },
            {
                title: 'Pouvoirs',
                color: '#9BC089',
                data: Characters.powerUsers
            },
            {
                title: 'Loups-garous',
                color: '#F15720',
                data: Characters.werewolves
            },
            {

                title: 'Ennemis de tous',
                color: '#9BC089',
                data: Characters.enemies
            }
        ];
    }

    incrementCharacter(name) {
        let characters = this.state.characters.slice();
        let index = null;
        let ifAlreadyAdded = characters.some((character, i) => {
            index = i;
            return character.name === name;
        });
        if (ifAlreadyAdded) {
            if (!Characters.data[name].unique) {
                characters[index].number++;
            }
        } else {
            characters.push({
                name, number: 1
            });
        }
        this.setState({characters});
    };

    decrementCharacter(name) {
        let characters = this.state.characters.slice();
        let index = null;
        let ifAlreadyAdded = characters.some((character, i) => {
            index = i;
            return character.name === name;
        });
        if (ifAlreadyAdded) {
            if (characters[index].number === 1) {
                if (characters.length === 1) {
                    characters = [];
                } else {
                    characters.splice(index, 1);
                }
            }
            else {
                characters[index].number--;
            }
            this.setState({characters});
        }
    }

    getPlayers() {
        return this.state.characters.reduce((a, b) => a + b.number, 0);
    }

    createGame = () => {
        this.setState({buttonState: 'busy'});
        let characters = {};
        this.state.characters.forEach((character) => {
            characters[character.code] = character.number;
        });
        axios.post('http://homlupo.hackjack.info/game', characters).then((response) => {
            this.props.navigation.navigate('Game', {room: response.data.id});
        });
    };

    static translate(object, lang) {
        return object[lang];
    }

    static translateNumber(object, lang, number) {
        if (number > 1) {
            return object.plural[lang];
        }
        return object.singular[lang];
    }

    render() {
        return (
            <LinearGradient style={{flex: 1}} colors={['#0A1620', '#201F43']}>
                <View style={style.gameMasterHome.container}>
                    <View style={style.gameMasterHome.pickView}>
                        <ScrollView>
                            {this.availableCharacters.map((section, key) => {
                                return (
                                    <View key={key}>
                                        <View style={{backgroundColor: 'transparent'}}>
                                            <Text style={{
                                                color: section.color,
                                                textAlign: 'center',
                                                fontFamily: 'spectralSC',
                                                fontSize: 18
                                            }}>
                                                {section.title}
                                            </Text>
                                            <Separator color={section.color} height={3}/>
                                        </View>
                                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                                            {section.data.map((character, cKey) => {
                                                return (
                                                    <TouchableHighlight key={cKey}
                                                                        onPress={() => this.incrementCharacter(character)}
                                                                        underlayColor={'rgba(255,255,255,0.1)'}>
                                                        <View style={{
                                                            backgroundColor: 'transparent',
                                                            padding: 5
                                                        }}>
                                                            <Text style={{
                                                                color: Characters.data[character].color,
                                                                fontFamily: 'berkshire-swash',
                                                                fontSize: 28
                                                            }}>
                                                                {GameMasterHome.translate(Characters.data[character].title, 'fr')}
                                                            </Text>
                                                        </View>
                                                    </TouchableHighlight>
                                                );
                                            })}
                                        </View>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                    <View style={style.gameMasterHome.splitView}>
                        <Separator color={'#7A7A94'} height={3}/>
                        <View style={style.gameMasterHome.recapView}>
                            <View style={style.gameMasterHome.playersView}>
                                <Text style={{
                                    color: '#F1D7C5',
                                    fontWeight: 'bold',
                                    fontFamily: 'EBGaramond-xBoldItalic'
                                }}>
                                    Déjà présents dans le village ({this.getPlayers()}) :
                                </Text>
                                <ScrollView>
                                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                                        {this.state.characters.map((character, key) => {
                                            return (
                                                <TouchableHighlight key={key}
                                                                    onPress={() => this.decrementCharacter(character.name)}
                                                                    underlayColor={'rgba(255,255,255,0.1)'}>
                                                    <View style={{backgroundColor: 'transparent', padding: 5}}>
                                                        <Text style={{
                                                            color: Characters.data[character.name].color,
                                                            fontFamily: 'berkshire-swash',
                                                            fontSize: 18
                                                        }}>
                                                            {character.number} {GameMasterHome.translateNumber(Characters.data[character.name], 'fr', character.number)}
                                                        </Text>
                                                    </View>
                                                </TouchableHighlight>
                                            );
                                        })}
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={style.gameMasterHome.submitView}>
                                <AwesomeButton
                                    states={{
                                        idle: {
                                            text: 'Créer la partie',
                                            backgroundStyle: style.button.idle,
                                            labelStyle: style.button.light,
                                            onPress: this.createGame
                                        },
                                        busy: {
                                            text: 'Création en cours',
                                            spinner: true,
                                            labelStyle: style.button.light,
                                            spinnerProps: {
                                                animated: true,
                                                color: 'white'
                                            },
                                            backgroundStyle: style.button.busy
                                        },
                                        error: {
                                            text: 'Non valide',
                                            labelStyle: style.button.light,
                                            backgroundStyle: style.button.error
                                        }
                                    }}
                                    transitionDuration={400}
                                    buttonState={this.state.buttonState}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}