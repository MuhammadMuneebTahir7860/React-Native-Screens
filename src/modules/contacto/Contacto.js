import React from "react";
import { Text ,View,ScrollView,TouchableOpacity,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './ContactoStyle';
import image from '../../assets/success.png';
import CustomButton from "../../commonComponents/button/CustomButton";
import facebookImage from '../../assets/facebook.png';
import twiterImage from '../../assets/twitter.png';
import inImage from '../../assets/in.png';
export default function Contacto({navigation}){
    return(
        <ScrollView>
             <View style={style.headerContainer}>
                <View style={style.headerRow}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={style.contactoHeading}>Contacto</Text>
                </View>
            </View>
            <View style={style.lineStyle} />
            <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:30}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>
            ¿Necesitas ayuda?
            </Text>
            <Text style={{fontSize:14,marginTop:10}}>
            Estamos aquí para ayudarte
            </Text>
            </View>
            <View style={style.imageContainer}>
            <Image style={{width:'90%',marginRight:'auto',marginLeft:'auto'}} source={image} />
            </View>
            <View style={style.btnContainer}>
            <CustomButton color='#227BFF' title='Contactar en WhatsApp' />
            </View>
            <View style={style.lineStyle} />
            <View style={style.socialMediaContainer}>
                <Text style={{fontSize:12}}>
                Para respuestas inmediatas visita nuestra sección de
                </Text>
                <Text style={{color:'#227BFF',fontSize:14}}>
                Preguntas Frecuentes
                </Text>
                <View style={{marginTop:10}}>
                    <Text>
                    Conecta con nosotros:
                    </Text>
                    <View style={{display:"flex",flexDirection:'row',marginTop:10,marginBottom:30}}>
                        <Image style={{marginRight:10,height:30}} source={facebookImage} />
                        <Image style={{marginRight:10,height:30}} source={twiterImage} />
                        <Image style={{marginRight:10,height:30}} source={inImage} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}