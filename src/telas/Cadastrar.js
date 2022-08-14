import React, { useState , useContext} from 'react';
import { SafeAreaView, View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { MeuContexto } from '../contexts/MeuContexto';

export default function Cadastrar() {
   


    const navigation = useNavigation()
    const {salvarAnotacao, notaEdit} = useContext(MeuContexto)
    const [anotacao, setAnotacao] = useState(notaEdit ? notaEdit : {id: '', titulo: '', conteudo: ''})


    function handleSave(){
        if(anotacao.titulo === '' || anotacao.conteudo === ''){
            alert('Preencha as informações')
            return
        }
        salvarAnotacao(anotacao)
        navigation.goBack()

    }





 return (
   <SafeAreaView style={estilos.container}>
    <TextInput style={estilos.inputTitulo} placeholder='Digite o título...' placeholderTextColor={'white'} value={anotacao.titulo} onChangeText={(texto) => setAnotacao({...anotacao, titulo: texto})}/>
    <TextInput placeholder='Digite a anotação...'
    multiline
    placeholderTextColor={'white'}
    textAlignVertical={'top'}
    value={anotacao.conteudo}
    onChangeText={(texto) => setAnotacao({...anotacao, conteudo: texto})}
    style={estilos.inputAnotacao}
    />
    <TouchableOpacity style={estilos.botao} onPress={handleSave}>
        <Icon name='check' size={21} color={'black'}/>
    </TouchableOpacity>
   </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000000',

    },inputTitulo:{
        marginLeft: 5,
        color: '#fff',
        height: '10%',
        width: '95%',
    },inputAnotacao:{
        marginLeft: 5,
        alignItems: 'flex-start',
        color: 'white',
        height: '90%',
        width: '95%',
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