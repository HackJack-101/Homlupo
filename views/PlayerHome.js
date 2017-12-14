import React from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './../Style';
import Button from 'apsl-react-native-button';
import NumericInput from './../components/NumericInput';
import {LinearGradient} from 'expo';


export default class PlayerHome extends React.Component {
    static navigationOptions = {
        title: 'Entrer dans le village',
    };

    constructor(props) {
        super(props);
        this.state = {
            room: 0,
            name: ''
        }
    }

    enterRoom = () => {
        this.props.navigation.navigate('GetCard', {room: this});
    };

    render() {
        return (
            <LinearGradient style={{flex: 1}} colors={['#0A1620', '#201F43']}>
                <View style={style.container}>
                    <NumericInput
                        title={'Quel est le numéro de ta salle de jeu ?'}
                        value={this.state.room}
                        onChangeValue={(room) => {
                            this.setState({room});
                        }}
                        min={0}
                    />
                    <View style={{alignSelf: 'stretch'}}>
                        <TextInput value={this.state.name} onChangeText={(name) => this.setState({name})}/>
                    </View>
                    <Button style={[style.button.generic, {backgroundColor: style.colors.green}]} textStyle={style.button.light}
                            onPress={this.enterRoom}>
                        Entrer dans la partie
                    </Button>
                </View>
            </LinearGradient>
        );
    }
}