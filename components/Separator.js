import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

export default class Separator extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[{
                backgroundColor: this.props.color,
                height: this.props.height,
                alignSelf: 'stretch',
                marginHorizontal: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: this.props.color
            },(this.props.hasOwnProperty('style') ? this.props.style : {})]}>
            </View>
        );
    }
}

Separator.propTypes = {
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object
};