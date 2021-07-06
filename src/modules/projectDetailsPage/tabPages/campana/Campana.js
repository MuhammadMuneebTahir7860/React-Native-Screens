import React from "react";
import { Text ,View,Image} from "react-native";
import style from './CampanaStyle';
import PieChartIcon from 'react-native-vector-icons/MaterialIcons';
import CollapseArrowIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import CheckIcon from 'react-native-vector-icons/Feather';
import mapImage from '../../../../assets/map.png';
export default function Campana() {
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <View style={{marginTop:30,width:'90%',marginLeft:'auto',marginRight:'auto'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                Resumen
                </Text>
            </View>
            <View style={{width:'90%',marginRight:'auto',marginLeft:'auto',marginTop:20}}>
                <Text style={{fontWeight:'300',fontSize:10}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
            <View style={{width:'90%',marginRight:'auto',marginLeft:'auto',marginTop:20}}>
                <Text style={{fontWeight:'300',fontSize:10}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:'90%',marginTop:20,marginLeft:'auto',marginRight:'auto'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                Indicadores
                </Text>
            </View>
            <View style={{width:'90%',marginTop:20,marginLeft:'auto',marginRight:'auto',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{display:"flex",flexDirection:'row'}}>
            <PieChartIcon name='pie-chart-outlined' size={25} color='#2F80ED'  />
            <Text style={{fontSize:14,marginTop:3,marginLeft:5}}>
            Financiamiento sobre costo
            </Text>
            </View>
            <View>
                <Text style={{fontSize:14,fontWeight:'bold'}}>
                48%
                </Text>
            </View>
            </View>
            <View style={{width:'90%',marginTop:20,marginLeft:'auto',marginRight:'auto',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{display:"flex",flexDirection:'row'}}>
            <CollapseArrowIcon name='arrow-collapse-vertical' size={25} color='#2F80ED'  />
            <Text style={{fontSize:14,marginTop:3,marginLeft:5}}>
            Valor de la garantía sobre el crédito
            </Text>
            </View>
            <View>
                <Text style={{fontSize:14,fontWeight:'bold'}}>
                150%
                </Text>
            </View>
            </View>
            <View style={{width:'90%',marginTop:20,marginLeft:'auto',marginRight:'auto',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{display:"flex",flexDirection:'row'}}>
            <LineIcon name='graph' size={25} color='#2F80ED'  />
            <Text style={{fontSize:14,marginTop:3,marginLeft:5}}>
            Control de flujos
            </Text>
            </View>
            <View>
                <Text style={{fontSize:14,fontWeight:'bold'}}>
                Entrega gasto por gasto
                </Text>
            </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{marginTop:30,width:'90%',marginLeft:'auto',marginRight:'auto'}}>
                <Text style={{fontWeight:'bold',fontSize:16}}>
                Puntos destacados
                </Text>
            </View>
            <View style={{width:'90%',marginRight:'auto',marginLeft:'auto',marginTop:30}}>
            <View style={{display:'flex',flexDirection:'row'}}>
            <CheckIcon name='check' size={30} color='#6FCF97' />
            <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',marginTop:3}}>
            Punto destacado No. 1
            </Text>
            </View>
            <View>
                <Text style={{fontSize:10,color:'#0C1327'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </Text>
            </View>
            </View>
            <View style={{width:'90%',marginRight:'auto',marginLeft:'auto',marginTop:30}}>
            <View style={{display:'flex',flexDirection:'row'}}>
            <CheckIcon name='check' size={30} color='#6FCF97' />
            <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',marginTop:3}}>
            Punto destacado No. 2
            </Text>
            </View>
            <View>
                <Text style={{fontSize:10,color:'#0C1327'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </Text>
            </View>
            </View>
            <View style={{width:'90%',marginRight:'auto',marginLeft:'auto',marginTop:30}}>
            <View style={{display:'flex',flexDirection:'row'}}>
            <CheckIcon name='check' size={30} color='#6FCF97' />
            <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold',marginTop:3}}>
            Punto destacado No. 3
            </Text>
            </View>
            <View>
                <Text style={{fontSize:10,color:'#0C1327'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </Text>
            </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{marginTop:20,width:'90%',marginRight:'auto',marginLeft:'auto'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                Ubicación
                </Text>
            </View>
            <View style={{marginTop:20}}>
                <Image style={{width:'100%'}} source={mapImage} />
            </View>

        </View>

    )
}