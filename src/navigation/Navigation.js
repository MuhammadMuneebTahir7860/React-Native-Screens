import LoginDark from "../modules/auth/LoginDark";
import React from 'react';
import Intro from "../modules/intro/Intro";
import Login from "../modules/auth/Login";
import Signup1 from "../modules/auth/Signup1";
import Signup2 from '../modules/auth/Signup2';
import Dashboard from "../modules/dashboard/Dashboard";
import Cuenta from "../modules/cuenta/Cuenta";
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../commonComponents/drawer/Drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Image,Text } from "react-native";
import invertirImage from '../assets/invertir.png';
import cuentaIcon from '../assets/cuentaIcon.png';
import settingIcon from '../assets/settingIcon.png';
import contactIcon from '../assets/contactIcon.png';
import Ajustes from "../modules/ajustes/Ajustes";
import Contacto from "../modules/contacto/Contacto";
import ProjectDetailsPage from "../modules/projectDetailsPage/ProjectDetailsPage";
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function TabNavigation () {
  return(
  <Tab.Navigator tabBarOptions={{
    showLabel:false,
    style:{
      height:60,
      paddingTop:10,
    }
  }} >
  <Tab.Screen name="Invertir" component={Dashboard} 
  options ={{
    tabBarIcon :({focused})=>(
      <View style={{alignItems:'center',justifyContent:'center',width:50}}>
        <Image source={invertirImage}
         resizeMode="contain"
        style={{
          width:20,
          height:20,
          tintColor:focused? '#227BFF' : 'black'
        }}
        />
        <Text style={{color : focused? '#227BFF' : 'black',fontSize:10}}>
          Invertir
        </Text>
      </View>
  ),
  }}
  />
  <Tab.Screen name="Cuenta" component={Cuenta} 
   options ={{
    tabBarIcon :({focused})=>(
      <View style={{alignItems:'center',justifyContent:'center',width:50}}>
        <Image source={cuentaIcon}
         resizeMode="contain"
        style={{
          width:20,
          height:20,
          tintColor:focused? '#227BFF' : 'black'
        }}
        />
        <Text style={{color : focused? '#227BFF' : 'black',fontSize:10}}>
          Cuenta
        </Text>
      </View>
  ),
  }}/>
 
    <Tab.Screen name="Ajustes" component={Ajustes} 
   options ={{
    tabBarIcon :({focused})=>(
      <View style={{alignItems:'center',justifyContent:'center',width:50}}>
        <Image source={settingIcon}
         resizeMode="contain"
        style={{
          width:20,
          height:20,
          tintColor:focused? '#227BFF' : 'black'
        }}
        />
        <Text style={{color : focused? '#227BFF' : 'black',fontSize:10}}>
          Ajustes
        </Text>
      </View>
  ),
  }}/>
     <Tab.Screen name="Contacto" component={Contacto} 
   options ={{
    tabBarIcon :({focused})=>(
      <View style={{alignItems:'center',justifyContent:'center',width:50}}>
        <Image source={contactIcon}
         resizeMode="contain"
        style={{
          width:20,
          height:20,
          tintColor:focused? '#227BFF' : 'black'
        }}
        />
        <Text style={{color : focused? '#227BFF' : 'black',fontSize:10}}>
          Contacto
        </Text>
      </View>
  ),
  }}/>
</Tab.Navigator>
  )
}

export default function Navigation() {
  return (
      // <LoginDark />
      // <Intro />
      // <Login />
    // <Signup1 />
    // <Signup2 />
    // <Dashboard />
    <Drawer.Navigator drawerContent={ props => <SideMenu {...props} /> }>
    <Drawer.Screen  name="TabNavigation" component={TabNavigation} />
  </Drawer.Navigator>
  // <ProjectDetailsPage />
  )
}