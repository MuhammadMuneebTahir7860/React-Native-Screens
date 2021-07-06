import { ImageBackground,Text, View, Image } from "react-native";
import React from 'react';
import style from './IntroStyle';
import image from '../../assets/bg.png';
import logo from '../../assets/logo.png';
import CustomButton from "../../commonComponents/button/CustomButton";
export default function Intro() {
    return (
        <View style={style.mainContainer}>
            <ImageBackground source={image} style={style.image}>
            <View style={style.logoContainer}>
                <Image source={logo}/>
            </View>
            <View style={style.textContainer}>
                <Text style={style.text}>CROWDFUNDING</Text>
                <Text style={style.text}>INMOBILIARIO</Text>
            </View>
            <View style={style.btnsContainer}>
            <CustomButton title="Iniciar sesion" color="#227BFF"/>
            <CustomButton title="Crear cuenta" color="#0C1327"/>
            </View>
            </ImageBackground>
        </View>
    )
}