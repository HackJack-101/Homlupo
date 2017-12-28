import React from 'react';
import {View, Text, TextInput, ActivityIndicator, TouchableHighlight, Platform, StatusBar} from 'react-native';
import style from './../Style';
import PropTypes from 'prop-types';
import axios from 'axios';
import {LinearGradient} from 'expo';
import NavigationBar from 'react-native-navbar';
import Translate from './../utils/Translate';
import Characters from './../data/Characters';


export default class Game extends React.Component {
    static navigationOptions = ({navigation}) => {
        let title = "Partie en cours";
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
            card: null,
            name: this.props.navigation.state.params.name,
            room: this.props.navigation.state.params.room,
            debug: this.props.navigation.state.params.debug,
            advanced: this.props.navigation.state.params.advanced,
            id: this.props.navigation.state.params.id,
            hidden: true
        }
    }

    componentDidMount() {
        this.enterRoom();
    }

    switchCard = () => {
        this.setState({hidden: !this.state.hidden});
    };

    enterRoom() {
        if (this.state.debug) {
            axios.get('http://homlupo.hackjack.info/room/' + this.state.room + '/' + this.state.id)
                .then((response) => {
                    this.setState({card: response.data});
                });
        } else {
            axios.post('http://homlupo.hackjack.info/game/' + this.state.room, {name: this.state.name})
                .then((response) => {
                    this.setState({card: response.data});
                });
        }
    }

    render() {
        let content;
        if (this.state.card === null) {
            content = (<ActivityIndicator style={style.activityIndicator} size="large" animating={true}/>);
        }
        else {
            if (this.state.hidden) {
                content = (
                    <View style={{backgroundColor: 'transparent'}}>
                        <TouchableHighlight onPress={this.switchCard}>
                            <View style={{backgroundColor: 'transparent'}}>
                                <Text style={{color: 'white'}}>Afficher ma carte</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                );
            } else {
                content = (
                    <View style={{backgroundColor: 'transparent'}}>
                        <Text style={{color: 'white'}}>{this.state.card.name}</Text>
                        <Text style={{color: 'white'}}>{Translate.translate(Characters.data[this.state.card.character], 'fr')}</Text>
                        <Text style={{color: 'white'}}>En vie : {this.state.card.alive ? 'oui' : 'non'}</Text>
                        <Text style={{color: 'white'}}>Infesté : {this.state.card.infested ? 'oui' : 'non'}</Text>
                        <Text style={{color: 'white'}}>Charmé : {this.state.card.charmed ? 'oui' : 'non'}</Text>
                        <Text style={{color: 'white'}}>Amoureux : {this.state.card.lover ? 'oui' : 'non'}</Text>
                        <Text style={{color: 'white'}}>ID : {this.state.card.id}</Text>
                        <View style={{backgroundColor: 'transparent'}}>
                            <TouchableHighlight onPress={this.switchCard}>
                                <View style={{backgroundColor: 'transparent'}}>
                                    <Text style={{color: 'white'}}>Cacher ma carte</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>

                );
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