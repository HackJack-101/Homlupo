import React from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './../Style';
import PropTypes from 'prop-types';
import axios from 'axios';
import {LinearGradient} from 'expo';

export default class Game extends React.Component {
    static navigationOptions = {
        title: 'Salon de jeu',
    };

    constructor(props) {
        super(props);
        this.state = {
            room: null,
            id: this.props.navigation.state.params.room
        }
    }

    componentDidMount() {
        this.fetchRoom();
    }

    fetchRoom() {
        axios.get('http://homlupo.hackjack.info/room/' + this.state.id)
            .then((response) => {
                this.setState({room: response.data});
            });
    }

    render() {
        return (
            <LinearGradient style={{flex: 1}} colors={['#0A1620', '#201F43']}>
                <View style={style.container}>
                    <Text style={{color: 'white'}}>Joueurs prêts</Text>
                    {this.state.room.players.map((player, key) => {
                        return (
                            <View key={key}>
                                <Text style={{color: 'white'}}>Nom : {player.name}</Text>
                                <Text style={{color: 'white'}}>Personnage : {player.character}</Text>
                                <Text style={{color: 'white'}}>En vie : {player.alive ? 'oui' : 'non'}</Text>
                                <Text style={{color: 'white'}}>Infesté : {player.infested ? 'oui' : 'non'}</Text>
                                <Text style={{color: 'white'}}>Charmé : {player.charmed ? 'oui' : 'non'}</Text>
                                <Text style={{color: 'white'}}>Amoureux : {player.lover ? 'oui' : 'non'}</Text>
                            </View>
                        );
                    })}
                </View>
            </LinearGradient>
        );
    }
}