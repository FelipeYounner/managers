// Import a library to help create a component
import React from 'react';
import {TextInput, Text, View} from 'react-native';

// Create a component
const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const {inputStyle,labelStyle,containerStyle} = styles;


        return(
            <View style = {containerStyle}>
                <Text style = {labelStyle}>{label}</Text>

                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect = {false}
                    style = {inputStyle}
                    value = {value}
                    onChangeText = {onChangeText}
                />
            </View>
        )
};

const styles = {
    inputStyle: {
        color:'#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        color:'#000',
        fontSize: 18,
        paddingLeft: 5,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'

    }
};

// Make the component available to other parts of the app
export { Input };