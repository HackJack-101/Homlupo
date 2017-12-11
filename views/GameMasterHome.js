import React from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './../Style';
import Button from 'apsl-react-native-button';
import NumericInput from '../components/NumericInput';


export default class GameMasterHome extends React.Component {
    static navigationOptions = {
        title: 'Préparation des cartes',
    };

    constructor(props) {
        super(props);
        this.state = {
            characters: [
                {
                    name: 'werewolves',
                    code: 'w',
                    number: 3
                },
                {
                    name: 'peasants',
                    code: 'p',
                    number: 7
                }
            ],
            extraCharacters: [
                {
                    name: 'littleGirl',
                    code: 'g'
                },
                {
                    name: 'cupid',
                    code: 'c'
                },
                {
                    name: 'witch',
                    code: 'witch'
                },
                {
                    name: 'hunter',
                    code: 'h'
                },
                {
                    name: 'seer',
                    code: 's'
                }
            ]
        };
        this.characters = {
            werewolves: {
                article: 'un',
                title: 'loup-garou',
                pluralTitle: 'loup-garous'
            },
            peasants: {
                article: 'un',
                title: 'villageois',
                pluralTitle: 'villageois',
            },
            littleGirl: {
                article: 'une',
                title: 'petite fille',
                pluralTitle: 'petites filles'
            },
            cupid: {
                article: 'un',
                title: 'Cupidon',
                pluralTitle: 'Cupidons'
            },
            witch: {
                article: 'une',
                title: 'sorcière',
                pluralTitle: 'sorcières'
            },
            seer: {
                article: 'une',
                title: 'voyante',
                pluralTitle: 'voyantes'
            },
            hunter: {
                article: 'un',
                title: 'chasseur',
                pluralTitle: 'chasseurs'
            }
        }
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

    render() {
        return (
            <View style={style.gameMasterHome.container}>

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
                            {'Ajouter ' + this.characters[character.name].article + ' '+ this.characters[character.name].title}
                        </Button>
                    );
                })}

                <View>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{this.getPlayers()} joueurs</Text>
                </View  >
                <Button style={[style.button.generic, {backgroundColor: style.colors.green}]} textStyle={style.button.light}>
                    Créer la partie
                </Button>
            </View>
        );
    }
}