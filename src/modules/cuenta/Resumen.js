import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import style from './ResumenStyle';
import Arrow from '../../assets/arrow.png';
import smallHousePic from '../../assets/smallHousePic.png';
export default function Resumen() {
    return (
        <ScrollView style={style.resumenContainer}>
            <View>
                <Text style={{ fontSize: 14, fontFamily: 'bold', textAlign: 'center', paddingTop: 20 }}>
                    VALOR PORTAFOLIO
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 36, color: "#227BFF", textAlign: 'center', paddingTop: 10 }}>
                    $100,000
                </Text>
            </View>
            <View style={{ marginLeft: 'auto', marginRight: 'auto', width: 200, justifyContent: 'space-around', display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                <View style={{ width: 70 }}>
                    <Text style={{ color: "#227BFF", }}>
                        <Image source={Arrow} /> $500
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 8 }}>
                        Ganancias Diarias
                        Estimadas
                    </Text>
                </View>
                <View style={{ width: 70, alignItems: 'center' }}>
                    <Text style={{ color: "#227BFF", }}>
                        $5,000
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 8 }}>
                        Ganancias Totales
                        Estimadas
                    </Text>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <Text style={{ fontWeight: 'bold', fontSize: 14, width: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: 20 }}>
                Portafolio
            </Text>
            <View style={style.lineStyle} />
            <View style={style.portFolioCard}>
                <View style={style.ImageSection}>
                    <Image style={{ width: '90%' }} source={smallHousePic} />
                </View>
                <View style={style.percentageContainer}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', lineHeight: 18 }}>
                        Desarollo 1
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Tasa Anual
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        15%
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Plazo
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        24 meses
                    </Text>
                </View>
                <View style={style.priceContiner}>
                    <Text style={{ lineHeight: 12, fontSize: 8 }}>
                        Pagos recibidos
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        $54,000
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Pagos pendientes
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        $54,000
                    </Text>
                </View>
                <View style={style.DateContiner}>
                    <Text style={{ lineHeight: 12, fontSize: 8 }}>
                        Fecha inicio
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        01/11/20
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Fecha termino
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        01/11/21
                    </Text>
                </View>
                <View style={{ width: '13%', paddingTop: 18, }}>
                    <Text style={{ fontSize: 8 }}>
                        Estado
                    </Text>
                    <Text style={{ color: '#227BFF' }}>
                        Activo
                    </Text>
                </View>
            </View>
            <View style={style.lineStyle} />
            <View style={style.portFolioCard}>
                <View style={style.ImageSection}>
                    <Image style={{ width: '90%' }} source={smallHousePic} />
                </View>
                <View style={style.percentageContainer}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', lineHeight: 18 }}>
                        Desarollo 1
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Tasa Anual
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        15%
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Plazo
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        24 meses
                    </Text>
                </View>
                <View style={style.priceContiner}>
                    <Text style={{ lineHeight: 12, fontSize: 8 }}>
                        Pagos recibidos
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        $54,000
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Pagos pendientes
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        $54,000
                    </Text>
                </View>
                <View style={style.DateContiner}>
                    <Text style={{ lineHeight: 12, fontSize: 8 }}>
                        Fecha inicio
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        01/11/20
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Fecha termino
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        01/11/21
                    </Text>
                </View>
                <View style={{ width: '15%', paddingTop: 18, }}>
                    <Text style={{ fontSize: 8 }}>
                        Estado
                    </Text>
                    <Text style={{ color: '#227BFF' }}>
                        Activo
                    </Text>
                </View>
            </View>
            <View style={style.lineStyle} />
            <View style={style.portFolioCard}>
                <View style={style.ImageSection}>
                    <Image style={{ width: '90%' }} source={smallHousePic} />
                </View>
                <View style={style.percentageContainer}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', lineHeight: 18 }}>
                        Desarollo 1
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Tasa Anual
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        15%
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Plazo
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        24 meses
                    </Text>
                </View>
                <View style={style.priceContiner}>
                    <Text style={{ lineHeight: 12, fontSize: 8 }}>
                        Pagos recibidos
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        $54,000
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Pagos pendientes
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        $54,000
                    </Text>
                </View>
                <View style={style.DateContiner}>
                    <Text style={{ lineHeight: 12, fontSize: 8 }}>
                        Fecha inicio
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        01/11/20
                    </Text>
                    <Text style={{ fontSize: 8, lineHeight: 12 }}>
                        Fecha termino
                    </Text>
                    <Text style={{ lineHeight: 18 }}>
                        01/11/21
                    </Text>
                </View>
                <View style={{ width: '15%', paddingTop: 18, }}>
                    <Text style={{ fontSize: 8 }}>
                        Estado
                    </Text>
                    <Text style={{ color: '#227BFF' }}>
                        Activo
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}