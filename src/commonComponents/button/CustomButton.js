import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
export default function CustomButton({title,color}){
    return(
        <TouchableOpacity>
        <Text  style={{
            backgroundColor:color,
            height: 60,
            color: 'white',
            borderRadius: 50,
            textAlign:'center',
            paddingTop:10,
            fontWeight:'normal',
            lineHeight:34,
            fontSize:20,
            width:'100%',
            marginBottom:10,
        }}>
            {title}
            </Text>
    </TouchableOpacity> 
    )
}