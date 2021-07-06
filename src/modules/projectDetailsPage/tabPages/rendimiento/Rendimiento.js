import React from "react";
import { Text,Image,View } from "react-native";
import style from './RendimientoStyle';
import * as Progress from 'react-native-progress';
export default function Rendimiento(){
    return(
        <View style={{backgroundColor:'white',flex:1}}>
           <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:40}}>
               <Text style={{color:'#0C1327',fontSize:16,fontWeight:'bold'}}>
               Calculadora
               </Text>
           </View>
           <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:20}}>
              <Text>
                  1. Monto a invertir
              </Text>
           </View>
           <Text style={{textAlign:'center'}}>
           $80,000
           </Text>
           <View style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}>
                    <Progress.Bar borderRadius={15} color='#0C1327' height={18} progress={0.4} width={330} >
                    </Progress.Bar>
                </View>
                <View style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: 10,display:'flex',flexDirection:'row',justifyContent:"space-between" }}>
                    <Text style={{fontSize:10}}>
                    $50,000
                    </Text>
                    <Text style={{fontSize:10}}>
                    $200,000
                    </Text>
                </View>
                <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:20}}>
              <Text>
              2. Plazo estimado para fines del cálculo
              </Text>
           </View>
           <Text style={{textAlign:'center',marginTop:20}}>
           6 Meses
           </Text>
           <View style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}>
                    <Progress.Bar borderRadius={15} color='#0C1327' height={18} progress={0.7} width={330} >
                    </Progress.Bar>
                </View>
                <View style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: 10,display:'flex',flexDirection:'row',justifyContent:"space-between" }}>
                    <Text style={{fontSize:10}}>
                    3 meses
                    </Text>
                    <Text style={{fontSize:10}}>
                    24 meses
                    </Text>
                </View>
            <View style={style.lineStyleTop} />
            <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:20,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text>
            Inversión total
            </Text>
            <Text>
            $100,000
            </Text>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text>
            Plazo
            </Text>
            <Text>
            6 meses
            </Text>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text>
            Rendimiento estimado
            </Text>
            <Text>
            $5,600
            </Text>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:10,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold'}}>
            Al final del plazo recibes
            </Text>
            <Text style={{fontWeight:'bold'}}>
            $105,600
            </Text>
            </View>


        </View>
      
    )
}