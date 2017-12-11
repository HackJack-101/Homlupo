import React from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './../Style';
import Button from 'apsl-react-native-button';


export default class PlayerHome extends React.Component {
    static navigationOptions = {
        title: 'Entrer dans le village',
    };

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={style.container}>
                <Text>Quel est le numéro de ta salle de jeu ?</Text>
                <TextInput/>

                <Button style={{backgroundColor: 'green'}} textStyle={style.button.light}>
                    Entrer
                </Button>
            </View>
        );
    }
}