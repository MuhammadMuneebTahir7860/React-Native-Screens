import React from "react";
import { Text,View,ScrollView,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './AjustesStyle';
import UserIcon  from "react-native-vector-icons/MaterialIcons";
import ArrowIcon  from "react-native-vector-icons/MaterialIcons";
import LonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactIcon from 'react-native-vector-icons/AntDesign';
import HumanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Ajustes ({navigation}){
    const perfilData=[
        {
            icon:<UserIcon  name='person-outline' size={30} />,
            title:'Datos personales',
            status:'Completado',
        },
        {
            icon:<LonIcons  name='location-outline' size={30} />,
            title:'Dirección',
            status:'Pendiente',
        }, {
            icon:<MaterialCommunityIcons  name='bank-outline' size={30} />,
            title:'Cuenta bancaria',
            status:'Pendiente',
        },
         {
            icon:<ContactIcon  name='contacts' size={30} />,
            title:'Conocimiento inversionista',
            status:'Pendiente',
        },
        {
            icon:<HumanIcon  name='human-male-female' size={30} />,
            title:'Beneficiarios',
            status:'Pendiente',
        },
        {
            icon:<Icon  name='search-plus' size={30} />,
            title:'Conocimiento de riesgos',
            status:'Pendiente',
        },
    ];
    const seguridadData=[
        {
            icon:<LonIcons  name='shield-checkmark-outline' size={30} />,
            title:'Contraseña',
            description:'Cambiar factor de autenticación principal',
        },
        {
            icon:<MaterialCommunityIcons  name='lock-outline' size={30} />,
            title:'NIP',
            description:'Cambiar factor de autenticación secundario',
        },
        {
            icon:<MaterialCommunityIcons  name='email-outline' size={30} />,
            title:'Email',
            description:'Cambiar correo electrónico',
        },
    ]
    return(
       <ScrollView >
         <View style={style.headerContainer}>
                <View style={style.headerRow}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={style.ajustesHeading}>Ajustes</Text>
                </View>
            </View>
            <View style={style.perfilContainer}>
                <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',paddingTop:15}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                    Perfil
                </Text>
                </View>
            </View>
            {
                perfilData.map((data)=>{
                    return(
                        <>
                        <View style={style.perfilListContainer}>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                        {data.icon}
                        <View style={{marginLeft:10}}>
                            <Text style={{fontWeight:'bold',fontSize:14}}>
                            {data.title}
                            </Text>
                            <Text style={{color:data.status=='Completado' ? '#227BFF':'#FF3366',fontSize:14}}>
                            {data.status}
                            </Text>
                        </View>
                        </View>
                        <View >
                           <ArrowIcon name='keyboard-arrow-right' size={30} />
                        </View>
                        </View>
                    </View>
                    <View style={style.lineStyleTop} />
                    </>
                    )
                })
            }
             <View style={style.seguridadContainer}>
                <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',paddingTop:15}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                Seguridad
                </Text>
                </View>
            </View>
            {
                seguridadData.map((data)=>{
                    return(
                        <>
                        <View style={style.perfilListContainer}>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                        {data.icon}
                        <View style={{marginLeft:10,width:250}}>
                            <Text style={{fontWeight:'bold',fontSize:14}}>
                            {data.title}
                            </Text>
                            <Text style={{color:'#000000',fontSize:14}}>
                            {data.description}
                            </Text>
                        </View>
                        </View>
                        <View >
                           <ArrowIcon name='keyboard-arrow-right' size={30} />
                        </View>
                        </View>
                    </View>
                    <View style={style.lineStyleTop} />
                    </>
                    )
                })
            }
       </ScrollView>
    )
}