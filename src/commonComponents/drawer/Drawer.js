import { View, Text,Image } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import style from './DrawerStyle';
import userImage from '../../assets/userImage.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function SideMenu(props) {
  return (
    <View style={{flex:1}}>
       <DrawerContentScrollView {...props}> 
        <View style={style.avatarSection}>
        <View style={style.userImageSection}>
      <Image source={userImage} />
        </View>
        <View>
          <Text style={{fontSize:20,fontWeight:'500',paddingTop:30}}>Juan Pérez</Text>
          <Text style={{fontSize:14,paddingTop:10,paddingBottom:20,}}>
          Verificación completada
          </Text>
        </View>
        </View>
        <View style = {style.lineStyle} />
      <DrawerItem
       icon = { ()=> ( <Icon name="briefcase" size={25} color={"#227BFF"} />  ) } 
        label="Historial de inversiones"
        onPress={() => { props.navigation.navigate('Dashboard') }}
      />
      <DrawerItem
       icon = { ()=> ( <Icon name="cloud-download-outline" size={25} color={"#227BFF"} />  ) } 
        label="Pagos recibios"
        onPress={() => { props.navigation.navigate('Dashboard') }}
      />
       <DrawerItem
       icon = { ()=> ( <Icon name="file" size={25} color={"#227BFF"} />  ) } 
        label="Documentos"
        onPress={() => { props.navigation.navigate('Dashboard') }}
      />
      <DrawerItem
       icon = { ()=> ( <Icon name="comment-question-outline" size={25} color={"#227BFF"} />  ) } 
        label="FAQ"
        onPress={() => { props.navigation.navigate('Dashboard') }}
      />
      <DrawerItem
       icon = { ()=> ( <Icon name="office-building" size={25} color={"#227BFF"} />  ) } 
        label="Fibre Cero"
        onPress={() => { props.navigation.navigate('Dashboard') }}
      />
       <DrawerItem
       icon = { ()=> ( <Icon name="cloud-check-outline" size={25} color={"#227BFF"} />  ) } 
        label="Términos y condiciones"
        onPress={() => { props.navigation.navigate('Dashboard') }}
      />
        <DrawerItem
       icon = { ()=> ( <Icon name="file-document" size={25} color={"#227BFF"} />  ) } 
        label="Aviso de privacidad"
        onPress={() => { props.navigation.navigate('Dashboard') }}
      />
         <DrawerItem
       icon = { ()=> ( <Icon name="logout-variant" size={25} color={"#227BFF"} />  ) } 
        label="Cerrar sesión"
        onPress={() => { props.navigation.navigate('Dashboard') }}
      />
      </DrawerContentScrollView>
    </View>
  )
}