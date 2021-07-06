
import React from 'react';
import {Keyboard,View,ImageBackground, Image, Text,TouchableOpacity,TextInput} from 'react-native';
import style from './SignupStyle2';
import CustomButton from '../../commonComponents/button/CustomButton';
import CustomTextInput from '../../commonComponents/textInput/CustomTextInput';
import image from '../../assets/bg.png';
import logo from '../../assets/logo.png';
import kyc from '../../assets/kyc.png';
export default function Signup2() {
    const [keyboardIsOpen, setKeyboardIsOpen] = React.useState(false);
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsOpen(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsOpen(false);
    });
    return (
        <View style={style.container}>
        <ImageBackground source={image} style={style.image}>
        {!keyboardIsOpen &&
        <View style={style.logoContainer}>
        <Image style={{marginTop:40}} source={logo}/>
        </View>
}
        <View style={style.formContainer}>
        <View style={style.headingContainer}>
            <Text style={style.heading}>Ingresa tu Nombre</Text>
        </View>
        <View style={{flex:2, alignItems:"center"}}>
        <Image source={kyc} />
        </View>
        <Text style={{marginLeft:25}}>Nombre(s)</Text>
        <View style={style.inputsContainer}>
        <CustomTextInput textColor="black" border='#D2D2D2' placeholder="Nombre(s)" placeholderTextColor="#D2D2D2"/>
        <Text style={{marginBottom:10,marginLeft:5}}>Apellido Paterno</Text>
        <CustomTextInput textColor="black" border='#D2D2D2' placeholder="Apellido Paterno" placeholderTextColor="#D2D2D2"/>
        <Text style={{marginBottom:10,marginLeft:5}}>Apellido Paterno*</Text>
        <CustomTextInput textColor="black" border='#D2D2D2' placeholder="Apellido Paterno" placeholderTextColor="#D2D2D2"/>
        </View>
        {!keyboardIsOpen &&
         <View style={style.btnContainer}>
         <CustomButton color='#227BFF' title="Continuar" />
         </View>
        }
        </View>
        </ImageBackground>
        </View>
    )
}