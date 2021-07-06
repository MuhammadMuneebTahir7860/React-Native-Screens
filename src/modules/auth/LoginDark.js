import React from 'react';
import {View, Image, Text,TouchableOpacity,TextInput} from 'react-native';
import style from './LoginDarkStyle';
import CustomButton from '../../commonComponents/button/CustomButton';
import CustomTextInput from '../../commonComponents/textInput/CustomTextInput';

export default function LoginDark() {
    return (
            <View style={style.container}>
                <View style={style.logoContainer}>
                    <Image style={style.logo} source={require('../../assets/logo.png')} />
                </View>
                <View style={style.inputContainer}>
                    <CustomTextInput textColor='white' border="white" placeholder="Correo electronico" placeholderTextColor="white"/>
                    <CustomTextInput textColor='white' border="white" placeholder="Contrasena" placeholderTextColor="white"/>
                    <TouchableOpacity>
                        <Text style={{color:'white',paddingLeft:5}}>Olvidaste contrasena?</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.btnContainer}>
                <CustomButton color='#FF3366' title="Login"/>
                </View>
            </View>
    )
}