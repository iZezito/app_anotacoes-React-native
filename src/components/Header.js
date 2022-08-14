import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
 return (
   <View style={estilos.container}>
    <Text style={estilos.texto}>Anotações</Text>
   </View>
  );
}

const estilos = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        height: 75,
        width: '100%'


    },
    texto:{
        color:'#fff', 
        fontWeight: 'bold',
        fontSize: 23
    }
})

