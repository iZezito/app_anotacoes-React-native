import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { MeuContexto } from '../contexts/MeuContexto';

export default function Anotacao({id, titulo, anotacao}) {
    const {deletar} = useContext(MeuContexto)

    function handleDelete(){
        deletar(id)
    }



 return (
    <TouchableWithoutFeedback onLongPress={handleDelete}>
    <View style={estilos.container}>
        
        <Text style={estilos.texto}>{titulo}</Text>
       
    </View>
   </TouchableWithoutFeedback>
  );
}

const estilos = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginLeft: 10,
        width: '90%',
        height: 65,
        marginVertical: 8,
        backgroundColor: '#181818',
        borderRadius: 10,
        alignItems: 'center',
    },
    texto:{
        marginLeft: 5,
        color: '#fff',
        fontSize: 18
    }

})