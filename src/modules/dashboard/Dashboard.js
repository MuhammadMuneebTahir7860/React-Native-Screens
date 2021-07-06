import React from 'react';
import { Keyboard, ScrollView, View, ImageBackground, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import style from './DashboardStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import HouseImage from '../../assets/house.png';
import buildingImage from '../../assets/building.png';
import * as Progress from 'react-native-progress';

export default function Dashboard({ navigation }) {
    return (
        <ScrollView style={style.dashBoardContainer}>
            <View style={style.headerContainer}>
                <View style={style.headerRow}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={style.dashboardHeading}>Invertir</Text>
                </View>
            </View>
            <View style={style.headingContainer}>
                <Text style={style.heading}>
                    Oportunidades de Inversión
                </Text>
            </View>
            <View style={style.detailsContainer}>
                <Text style={{ paddingLeft: 20, fontSize: 14, fontWeight: 'bold', lineHeight: 21, }}>
                    Desarrollo Alfa
                </Text>
                <View style={style.textRow}>
                    <Text style={{ paddingLeft: 20, fontSize: 10, color: "#959595" }}>
                        Por Desarrollador 1
                    </Text>
                    <Text style={{ position: 'absolute', top: -5, right: 20, fontSize: 14, fontWeight: 'normal' }}>
                        Quedan 39 días
                    </Text>
                </View>
                <View style={style.titleContainer}>
                    <Text style={{ textAlign: 'center', color: 'white', paddingTop: 3, fontWeight: 'bold' }}>
                        Deuda
                    </Text>
                </View>
                <View>
                    <Image style={{ width: '100%' }} source={HouseImage} />
                </View>
                <View>
                    <Progress.Bar borderRadius={0} height={18} progress={0.4} width={330} >
                        <Text style={{ color: 'white', fontSize: 20, textAlign: "center", marginTop: -6 }}>40%</Text>
                    </Progress.Bar>
                </View>
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20, width: "90%", marginLeft: 'auto', marginRight: 'auto' }}>
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
                <View style={style.lineStyle} />
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginTop: 20, width: "90%", marginLeft: 'auto', marginRight: 'auto' }}>
                    <View>
                        <Text style={{ fontSize: 12 }}>
                            Tasa anual fija
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                            12.32%
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>
                            Mín de inversión
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                            $54,000 MXN
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>
                            Plzo
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                            12 meses
                        </Text>
                    </View>
                </View>
            </View>

            <View style={style.detailsContainer}>
                <Text style={{ paddingLeft: 20, fontSize: 14, fontWeight: 'bold', lineHeight: 21, }}>
                    Desarrollo Alfa
                </Text>
                <View style={style.textRow}>
                    <Text style={{ paddingLeft: 20, fontSize: 10, color: "#959595" }}>
                        Por Desarrollador 1
                    </Text>
                    <Text style={{ position: 'absolute', top: -5, right: 20, fontSize: 14, fontWeight: 'normal' }}>
                        Quedan 39 días
                    </Text>
                </View>
                <View style={style.titleContainer}>
                    <Text style={{ textAlign: 'center', color: 'white', paddingTop: 3, fontWeight: 'bold' }}>
                        Deuda
                    </Text>
                </View>
                <View>
                    <Image style={{ width: '100%' }} source={buildingImage} />
                </View>
                <View>
                    <Progress.Bar borderRadius={0} height={18} progress={0.4} width={330} >
                        <Text style={{ color: 'white', fontSize: 20, textAlign: "center", marginTop: -6 }}>40%</Text>
                    </Progress.Bar>
                </View>
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginBottom: 20, marginTop: 20, width: "90%", marginLeft: 'auto', marginRight: 'auto' }}>
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
                <View style={style.lineStyle} />
                <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', marginTop: 20, width: "90%", marginLeft: 'auto', marginRight: 'auto' }}>
                    <View>
                        <Text style={{ fontSize: 12 }}>
                            Tasa anual fija
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                            12.32%
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>
                            Mín de inversión
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                            $54,000 MXN
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>
                            Plzo
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                            12 meses
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}