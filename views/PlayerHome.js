import React from 'react';
import {View, Platform, StatusBar, TextInput, Text} from 'react-native';
import style from './../Style';
import Button from 'apsl-react-native-button';
import NumericInput from './../components/NumericInput';
import {LinearGradient} from 'expo';
import NavigationBar from 'react-native-navbar';

export default class PlayerHome extends React.Component {
    static navigationOptions = ({navigation}) => {
        let title = "L'entrée du village";
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
            room: 0,
            id: 0,
            name: '',
            debug: this.props.navigation.state.params.debug,
            advanced: this.props.navigation.state.params.advanced
        }
    }

    enterRoom = () => {
        this.props.navigation.navigate('GetCard', {
            room: this.state.room,
            name: this.state.name,
            id: this.state.id,
            advanced: this.state.advanced,
            debug: this.state.debug
        });
    };

    render() {
        let additionalData;
        if (this.state.debug) {
            additionalData = (
                <View style={{
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    marginBottom: 5
                }}>
                    <View style={{backgroundColor: 'transparent'}}>
                        <Text style={{color: 'white'}}>ID du joueur : </Text>
                    </View>
                    <NumericInput
                        value={this.state.id}
                        onChangeValue={(id) => {
                            this.setState({id});
                        }}
                        min={0}
                    />
                </View>
            );
        } else {
            additionalData = (
                <View style={{
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    marginBottom: 5
                }}>
                    <View style={{backgroundColor: 'transparent'}}>
                        <Text style={{color: 'white'}}>Ton nom : </Text>
                    </View>
                    <TextInput
                        style={{color: 'white', height: 20, width: 200, paddingBottom: 2, borderColor: 'white', borderBottomWidth: 1}}
                        value={this.state.name} onChangeText={(name) => this.setState({name})}/>
                </View>
            );
        }
        return (
            <LinearGradient style={{flex: 1}} colors={['#0A1620', '#201F43']}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    paddingVertical: 5
                }}>
                    <View>
                    </View>
                    <View>
                        <View style={{
                            paddingHorizontal: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            marginBottom: 5
                        }}>
                            <View style={{backgroundColor: 'transparent'}}>
                                <Text style={{color: 'white'}}>Numéro du village : </Text>
                            </View>
                            <NumericInput
                                value={this.state.room}
                                onChangeValue={(room) => {
                                    this.setState({room});
                                }}
                                min={0}
                            />
                        </View>
                        {additionalData}
                    </View>
                    <View
                        style={{
                            alignSelf: 'stretch'
                        }}>
                        <Button style={[style.button.generic, {backgroundColor: style.colors.green}]} textStyle={style.button.light}
                                onPress={this.enterRoom}>
                            Entrer
                        </Button>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}