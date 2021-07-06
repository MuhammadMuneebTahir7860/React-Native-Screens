import React from "react";
import { Text,View,Image } from "react-native";
import style from './GarantiaStyle';
import garantiaImage from '../../../../assets/garantiaImage.png';
export default function Garantia(){
    return(
        <View style={{backgroundColor:'white',flex:1}}>
            <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:30}}>
                <Text style={{fontWeight:'bold',fontSize:16}}>
                Garantía 
                </Text>
            </View>
            <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:10}}>
                <Text>
                Tipo de garantía: Hipotecaria
                </Text>
            </View>
            <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:10}}>
                <Text style={{fontSize:10}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
            <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:10}}>
                <Text style={{fontSize:10}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
            <View style={{marginTop:30}}>
                <Image style={{width:'100%'}} source={garantiaImage} />
            </View>



        </View>
    )
}