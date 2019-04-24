import React from 'react';
import {Text , TouchableOpacity, StyleSheet} from 'react-native';


const Button = ({onPress}) => {
    return (
        <TouchableOpacity 
        style = {Style.buttonView}
        onPress={onPress}
        >
            <Text style = {Style.TextView}> Buy Now</Text>

        </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
    buttonView:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius :5,
        borderColor: '#007aff',
        marginHorizontal: 5,
    },

    TextView:{
        alignSelf:'center',
        fontSize: 16,
        fontWeight:'600',
        color: '#007aff',
        paddingVertical: 10, 
    }
})

export default Button;