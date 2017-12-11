import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import style from './../Style';

export default class NumericInput extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.hasOwnProperty('inputStyle')) {
            this.props.inputStyle = {};
        }
        if (this.props.hasOwnProperty('titleStyle')) {
            this.props.titleStyle = {};
        }
        this.state = {
            intValue: parseInt(props.value),
            textValue: String(props.value)
        }
    }

    setValue(value) {
        this.setState({
            intValue: value,
            textValue: String(value)
        });
        if (this.props.hasOwnProperty('onChangeValue') && typeof this.props.onChangeValue === 'function') {
            this.props.onChangeValue(value);
        }
    }

    onChangeText(textValue) {
        let intValue = parseInt(textValue);
        this.setValue(intValue);
    }

    incrementValue() {
        let value = this.state.intValue + 1;
        this.setValue(value);
    }

    decrementValue() {
        let value = this.state.intValue - 1;
        if (!(this.props.hasOwnProperty('min') && value < this.props.min)) {
            this.setValue(value);
        }
    }

    render() {
        return (
            <View style={style.components.numericInput.view}>
                <View style={style.components.numericInput.titleView}>
                    <Text style={[style.components.numericInput.title, this.props.titleStyle]}>{this.props.title}</Text>
                </View>
                <View style={style.components.numericInput.actionsView}>
                    <TextInput
                        style={[style.components.numericInput.textInput, this.props.inputStyle]}
                        onChangeText={(text) => this.onChangeText(text)}
                        value={this.state.textValue}
                        keyboardType='numeric'
                    />
                    <View style={style.components.numericInput.buttonView}>
                        <Button color='white' onPress={_ => this.incrementValue()} title="+"/>
                    </View>
                    <View style={style.components.numericInput.buttonView}>
                        <Button color='white' onPress={_ => this.decrementValue()} title="-"/>
                    </View>
                </View>
            </View>
        );
    }

}