import React from 'react';
import {View, Text, ActivityIndicator, Platform, StatusBar} from 'react-native';
import style from './../Style';
import PropTypes from 'prop-types';
import NavigationBar from 'react-native-navbar';
import axios from 'axios';
import {LinearGradient} from 'expo';

export default class Game extends React.Component {
    static navigationOptions = ({navigation}) => {
        let title = 'Le village #' + navigation.state.params.room;
        return {
            title,
            header: (
                <View
                    style={{
                        paddingTop: (Platform.OS === "android") ? StatusBar.currentHeight : 0,
                        backgroundColor: style.colors.linearGradient.start
                    }}>
                    <StatusBar barStyle="light-content"/>
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
        let id = this.props.navigation.state.params.room;
        this.state = {
            room: null,
            id,
            open: false,
            connected: false
        };
        this.socket = new WebSocket('ws://homlupo.hackjack.info:3003');
        this.socket.onopen = () => {
            this.socket.send('room:' + id);
        };
        this.socket.onmessage = (e) => {
            if (e.data.substr(0, 9) === 'connected') {
                this.setState({connected: true});
            } else {
                let data = JSON.parse(e.data);
                this.setState({room: data.room});
            }
        };
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
        let content;
        if (this.state.room === null) {
            content = (<ActivityIndicator style={style.activityIndicator} size="large" animating={true}/>);
        }
        else {
            content = (
                <View style={{backgroundColor: 'transparent'}}>
                    <Text style={{color: 'white'}}>En attente des joueurs</Text>
                    <ActivityIndicator style={style.activityIndicator} size="large" animating={true}/>
                </View>
            );
            if (this.state.room.players.length > 0) {
                content = this.state.room.players.map((player, key) => {
                    return (
                        <View key={key} style={{backgroundColor: 'transparent'}}>
                            <Text style={{color: 'white'}}>{player.name}</Text>
                            <Text style={{color: 'white'}}>Personnage : {player.character}</Text>
                            <Text style={{color: 'white'}}>En vie : {player.alive ? 'oui' : 'non'}</Text>
                            <Text style={{color: 'white'}}>Infesté : {player.infested ? 'oui' : 'non'}</Text>
                            <Text style={{color: 'white'}}>Charmé : {player.charmed ? 'oui' : 'non'}</Text>
                            <Text style={{color: 'white'}}>Amoureux : {player.lover ? 'oui' : 'non'}</Text>
                        </View>
                    );
                });
            }

        }
        return (
            <LinearGradient style={{flex: 1}} colors={['#0A1620', '#201F43']}>
                <View style={style.container}>
                    {content}
                </View>
            </LinearGradient>
        );
    }
}