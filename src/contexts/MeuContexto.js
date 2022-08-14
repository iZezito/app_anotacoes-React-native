import React, {createContext, useState} from "react";
import { Alert, ToastAndroid } from "react-native";


export const MeuContexto = React.createContext({})

function ContextProvider({children}){
    const [notaEdit, setEdit] = useState({})
    const [notas, setNotas] = useState(
        [
        ]
    )
    

    function salvarAnotacao(nota){
        if(nota.id){
            const indice = notas.findIndex(item => item.id === nota.id)
            const notasClone = notas
            notasClone[indice] = nota
            setNotas([...notasClone])
            setEdit({id: '', titulo: '', conteudo: ''})
            ToastAndroid.showWithGravityAndOffset(
                'Edição realizada!',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
              );

        }else{
            if(notas.length > 0){
                nota.id = notas[notas.length-1].id++
            }else{
                nota.id = 1
            }


            setNotas(atual => [...atual, nota])
            ToastAndroid.showWithGravityAndOffset(
                'Anotação criada!',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
              );
            
        }

        
       
        
        
        

    }

    function deletar(id){
        Alert.alert(
            "Excluir Anotação",
            "Deseja excluir essa anotação?",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                const filtrado = notas.filter((item) => item.id !== id)
                setNotas(filtrado)
                ToastAndroid.showWithGravityAndOffset(
                    'Excluído com sucesso!',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                  );

              } }
            ]
          );
        
    }

    function editar(){

    }



    return(
        <MeuContexto.Provider value={{notas, setNotas, salvarAnotacao, deletar, notaEdit, setEdit}}>
            {children}
        </MeuContexto.Provider>
    )
}

export default ContextProvider