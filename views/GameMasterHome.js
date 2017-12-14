import React from 'react';
import {View, Text, Platform, StatusBar, SectionList} from 'react-native';
import style from './../Style';
import Button from 'apsl-react-native-button';
import NumericInput from '../components/NumericInput';
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
                section: {
                    title: 'Villageois',
                    color: '#9BC089'
                },
                data: Characters.townFolks
            },
            {
                section: {
                    title: 'Pouvoirs',
                    color: '#9BC089'
                },
                data: Characters.powerUsers
            },
            {

                section: {
                    title: 'Loups-garous',
                    color: '#F15720'
                },
                data: Characters.werewolves
            },
            {

                section: {
                    title: 'Ennemis de tous',
                    color: '#9BC089'
                },
                data: Characters.enemies
            }
        ];
    }

    addCharacter(id) {
        let addedCharacter = this.state.extraCharacters[id];
        let characters = this.state.characters.slice();
        characters.push({
            name: addedCharacter.name, code: addedCharacter.code, number: 1
        });

        let extraCharacters = this.state.extraCharacters.filter((extraCharacter) => {
            return extraCharacter.name !== addedCharacter.name;
        });
        this.setState({characters, extraCharacters});
    };

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
            console.log(response);
            this.props.navigation.navigate('Game', {room: response.data.id});
        });
    };

    render() {
        return (
            <LinearGradient style={{flex: 1}} colors={['#0A1620', '#201F43']}>
                <View style={style.gameMasterHome.container}>
                    <View style={style.gameMasterHome.pickView}>
                        <SectionList
                            renderItem={({item, j, index}) => {
                                return (
                                    <View key={index} style={{backgroundColor: 'transparent'}}>
                                        <Text style={{color: 'white'}}>{item}</Text>
                                    </View>
                                );
                            }}
                            renderSectionHeader={({section}) => {
                                return (
                                    <View style={{backgroundColor: 'transparent'}}>
                                        <Text style={{color: section.section.color}}>{section.section.title}</Text>
                                        <Separator color={section.section.color} height={3}/>
                                    </View>
                                );
                            }}
                            sections={this.availableCharacters}
                            keyExtractor={(item, index) => index}
                            initialNumToRender={20}
                            onEndReachedThreshold={0.1}
                        />
                    </View>
                    <View style={style.gameMasterHome.recapView}>
                        <View style={style.gameMasterHome.playersView}>
                            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>{this.getPlayers()} joueurs</Text>
                        </View>

                        <View style={{alignSelf: 'stretch', paddingHorizontal: 5, paddingBottom: 10}}>
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
            </LinearGradient>
        );
    }
}


/*

<View style={style.gameMasterHome.playersView}>
                        <View style={style.gameMasterHome.charactersView}>
                            {this.state.characters.map((character, key) => {
                                return (
                                    <View style={style.gameMasterHome.inputPlayers} key={key}>
                                        <NumericInput
                                            title={'Nombre de ' + (character.number > 1 ? this.characters[character.name].pluralTitle : this.characters[character.name].title) + ' :'}
                                            value={character.number}
                                            onChangeValue={(value) => {
                                                let characters = this.state.characters.slice();
                                                characters[key].number = value;
                                                this.setState({characters});
                                            }}
                                            min={0}
                                        />
                                    </View>
                                );
                            })}
                        </View>
                    </View>

                    {this.state.extraCharacters.map((character, key) => {
                        return (
                            <Button key={key} style={[style.button.generic, {backgroundColor: style.colors.strongBlue}]}
                                    textStyle={style.button.light}
                                    onPress={() => this.addCharacter(key)}>
                                {'Ajouter ' + this.characters[character.name].article + ' ' + this.characters[character.name].title}
                            </Button>
                        );
                    })}
 */