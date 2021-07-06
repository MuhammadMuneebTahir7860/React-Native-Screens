import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './CuentaStyle';
import Resumen from './Resumen';
const Tab = createMaterialTopTabNavigator();

export default function Cuenta({ navigation }) {
    return (
        <ScrollView style={style.cuentaContainer}>
            <View style={style.headerContainer}>
                <View style={style.headerRow}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={style.cuentaHeading}>Cuenta</Text>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <View>
                <Tab.Navigator tabBarOptions={{
                    style: {
                        backgroundColor: '#F7F7F9',
                    }
                }}>
                    <Tab.Screen name='Resumen' component={Resumen} />
                    <Tab.Screen name='Transacciones' component={Resumen} />
                </Tab.Navigator>
            </View>
        </ScrollView>

    )
}