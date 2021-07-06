import React from 'react';
import {View, Image, Text,TouchableOpacity,TextInput} from 'react-native';

export default function CustomTextInput({placeholder,placeholderTextColor,border,textColor}) {
    return (
    <TextInput 
    style={{
        height: 60,
        borderColor: border,
        borderWidth: 1,
        color: textColor,
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
    }}
    
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    />
    )
}