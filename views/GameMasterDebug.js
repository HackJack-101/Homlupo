import React from 'react';
import {View, Text, Platform, StatusBar, TouchableHighlight} from 'react-native';
import style from './../Style';
import {LinearGradient} from 'expo';
import NavigationBar from 'react-native-navbar';
import NumericInput from "../components/NumericInput";

export default class GameMasterDebug extends React.Component {
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
        this.state = {
            roomID: 0,
        }
    }

    goToGame = () => {
        this.props.navigation.navigate('Game', {room: this.state.roomID});
    };

    render() {
        return (
            <LinearGradient style={{flex: 1}} colors={['#0A1620', '#201F43']}>
                <View style={style.gameMasterOptions.container}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{backgroundColor: 'transparent'}}>
                            <Text style={{color: 'white', }}></Text>
                        </View>
                        <NumericInput
                            title="Numéro du salon"
                            titleStyle={{fontFamily:'berkshire-swash'}}
                            value={this.state.roomID} onChangeValue={(roomID) => {
                            this.setState({roomID})
                        }}/>
                    </View>
                    <TouchableHighlight onPress={this.goToGame}>
                        <View>
                            <Text style={{color: 'white'}}>Accéder au village #{this.state.roomID}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </LinearGradient>
        );
    }
}