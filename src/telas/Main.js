import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView,View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Anotacao from '../components/Anotacao';
import Header from '../components/Header';
import Cadastrar from './Cadastrar';
import { useNavigation } from '@react-navigation/native';
import { MeuContexto } from '../contexts/MeuContexto';




export default function Main() {
    const {notas} = useContext(MeuContexto)
    const navigation = useNavigation()


    const [anotacoes, setAnotacoes] = useState(notas)


    useEffect(()=>{
        setAnotacoes(notas)
    },[notas])


 return (
   <SafeAreaView style={estilos.container}>
    <Header/>
    {anotacoes.length > 0 ? ( <FlatList
    data={anotacoes}
    keyExtractor={item => String(item.id)}
    renderItem={({item}) => (<Anotacao {...item}/>)}
    />) : (<Text style={{color: '#fff', alignSelf: 'center'}}>Nenhuma anotação</Text>)}
   
    <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('cadastrar')}>
        <Icon name='plus' size={21} color={'black'}/>
    </TouchableOpacity>

    
   </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
    container:{
        
        flex: 1,
        backgroundColor: '#000000',
    },texto:{
        color: '#fff'
    },botao:{
        height: 50,
        width: 50,
        borderRadius: 25,
        right: 30,
        bottom: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    }
})