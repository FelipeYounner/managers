// Import a library to help create a component
import React from 'react';
import {Text, View} from 'react-native';

// Create a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return(
        <View style = {viewStyle}>
            <Text style = {textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height: 60,
        paddingTop: 15,
        //borderBottomColor: '#F8F535',
        //borderBottomWidth: 5,
        elevation: 5,
        //shadowColor: '#000',
        //shadowOffset: { width: 10, height: 500},
        //shadowOpacity: 0.9
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export { Header};
