import React, {createContext, useState} from "react";
import { Alert, ToastAndroid } from "react-native";


export const MeuContexto = React.createContext({})

function ContextProvider({children}){
    const [almocoEdit, setEdit] = useState({})
    const [notas, setNotas] = useState(
        [
            {id: 1, titulo: 'Titulo teste 1', conteudo: 'Teste de Anotação'},
            {id: 2, titulo: 'Titulo teste 2', conteudo: 'Teste de Anotação'},
            {id: 3, titulo: 'Titulo teste 3', conteudo: 'Teste de Anotação'},
            {id: 4, titulo: 'Titulo teste 4', conteudo: 'Teste de Anotação'},
            {id: 5, titulo: 'Titulo teste 5', conteudo: 'Teste de Anotação'},
            {id: 6, titulo: 'Titulo teste 6', conteudo: 'Teste de Anotação'},
            {id: 7, titulo: 'Titulo teste 7', conteudo: 'Teste de Anotação'},
            {id: 8, titulo: 'Titulo teste 8', conteudo: 'Teste de Anotação'},
            {id: 9, titulo: 'Titulo teste 9', conteudo: 'Teste de Anotação'},
            {id: 10, titulo: 'Titulo teste 10', conteudo: 'Teste de Anotação'},
            {id: 11, titulo: 'Titulo teste 11', conteudo: 'Teste de Anotação'},
            {id: 12, titulo: 'Titulo teste 12', conteudo: 'Teste de Anotação'},
            {id: 13, titulo: 'Titulo teste 13', conteudo: 'Teste de Anotação'},
        ]
    )
    

    function salvarAnotacao(nota){
        if(notas.length > 0){
            nota.id = notas[notas.length-1].id++
        }else{
            nota.id = 1
        }
        
        setNotas(atual => [...atual, nota])

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
        <MeuContexto.Provider value={{notas, setNotas, salvarAnotacao, deletar}}>
            {children}
        </MeuContexto.Provider>
    )
}

export default ContextProvider