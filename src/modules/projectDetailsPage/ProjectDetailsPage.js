import React from "react";
import { Text, Image, ScrollView, View } from "react-native";
import style from './ProjectDetailsPageStyle';
import projectImage from '../../assets/projectDetailsImage.png';
import WatchIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';
import Campana from "./tabPages/campana/Campana";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Garantia from "./tabPages/garantia/Garantia";
import Detalles from "./tabPages/detalles/Detalles";
import Rendimiento from "./tabPages/rendimiento/Rendimiento";
const Tab = createMaterialTopTabNavigator();

export default function ProjectDetailsPage() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View>
                <Image style={{ width: '100%' }} source={projectImage} />
            </View>
            <View style={style.detailsPage}>
                <View style={{ paddingTop: 20, width: "90%", marginLeft: 'auto', marginRight: 'auto' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                        Desarrollo Alfa
                    </Text>
                </View>
                <View style={{ width: "90%", marginRight: 'auto', marginLeft: 'auto', justifyContent: 'space-between', display: "flex", flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16 }}>
                        Por Desarrollador Uno
                    </Text>
                    <Text style={{ fontSize: 12, color: '#828282' }}>
                        <WatchIcon name='clock-time-four-outline' size={15} color="#828282" />
                        Quedan 39 días
                    </Text>
                </View>
                <View style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: 40 }}>
                    <Progress.Bar borderRadius={15} color='#0C1327' height={18} progress={0.7} width={330} >
                        <Text style={{ color: 'white', fontSize: 14, textAlign: "center", marginTop: -3 }}>70%</Text>
                    </Progress.Bar>
                </View>
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginTop: 10, width: "90%", marginLeft: 'auto', marginRight: 'auto' }}>
                    <Text style={{ fontSize: 10 }}>
                        $1.5MM recaudado
                    </Text>
                    <Text style={{ fontSize: 10 }}>
                        Min $4.5MM
                    </Text>
                    <Text style={{ fontSize: 10 }}>
                        Max $4.5MM
                    </Text>
                </View>
                <View style={style.lineStyleTop} />
                <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto',marginTop:20 }}>
                    <Text style={{fontSize:10,fontWeight:'300',lineHeight:15}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>
                <View style={style.lineStyleTop} />
                <View style={style.tableContainer}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <Text style={{fontWeight:'bold',fontSize:10}}>
                Instrumento:
                </Text>
                <Text style={{fontWeight:'normal',fontSize:10,color:'#0C1327'}}>
                Deuda
                </Text><Text style={{fontWeight:'bold',fontSize:10}}>
                Mínimo para invertir: $50,000
                </Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <Text style={{fontWeight:'bold',fontSize:10}}>
                Plazo:
                </Text>
                <Text style={{fontWeight:'normal',fontSize:10,color:'#0C1327'}}>
                12 meses
                </Text><Text style={{fontWeight:'bold',fontSize:10}}>
                Comisión: 2.5% anual
                </Text>
                </View><View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                <Text style={{fontWeight:'bold',fontSize:10}}>
                Pago:
                </Text>
                <Text style={{fontWeight:'normal',fontSize:10,color:'#0C1327'}}>
                Anual
                </Text><Text style={{fontWeight:'bold',fontSize:10}}>
                Garantía: Hipotecaria
                </Text>
                </View><View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                <Text style={{fontWeight:'bold',fontSize:10}}>
                Tasa anual:
                </Text>
                <Text style={{fontWeight:'normal',fontSize:10,color:'#0C1327'}}>
                15%
                </Text><Text style={{fontWeight:'bold',fontSize:10}}>
                TIR anual estimada: 12.4%
                </Text>
                </View>
                </View>
                <View style={style.lineStyleTop} />
                <View>
                <Tab.Navigator 
                 tabBarOptions={{
                    style: {
                        height:60,
                        justifyContent:"center",
                    },
                    labelStyle: {
                        fontSize:11,
                        textTransform:'none',
                    },
                    indicatorStyle: {
                      borderBottomColor: '#0C1327',
                      borderBottomWidth: 4,
                    },
                  }}
                >
                    <Tab.Screen name='Campana'  component={Campana} />
                    <Tab.Screen name='Garantia' component={Garantia} />
                    <Tab.Screen name='Detalles' component={Detalles} />
                    <Tab.Screen name='Rendimiento' component={Rendimiento} />
                </Tab.Navigator>
            </View>
            </View>
        </ScrollView>
    )

}