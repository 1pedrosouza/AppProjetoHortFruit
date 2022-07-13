import React,{useState} from "react";
import { Text,View,StyleSheet,Alert,TouchableOpacity,TextInput } from "react-native";
import {salvarNovaFruta} from './ModelFrutas';

export default function CadastratFruta({navigation}){
    const [idp, setIdp] =useState('');
    const [frutap, setFrutap] =useState('');
    const [valorp, setValorp] =useState('');
    const [fotop, setFotop] =useState('');

    async function cadastro(){
        const resultado = await salvarNovaFruta(idp,frutap,valorp,fotop);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta cadastrada com Sucesso!!');
           navigation.goBack();
       
        }else{
            Alert.alert('Erro ao cadastrar a fruta');
        }
    }

    return(
        <View style={estilo.container}>
            <TextInput
            value={idp}
            placeholder="Digite o id da Fruta"
            style={estilo.textInputTodos}
            onChangeText={setIdp}
            />
            <TextInput
            value={frutap}
            placeholder="Digite o nome da Fruta"
            style={estilo.textInputTodos}
            onChangeText={setFrutap}
            />
            <TextInput
            value={valorp}
            placeholder="Digite o valor da Fruta"
            style={estilo.textInputTodos}
            onChangeText={setValorp}
            />
            <TextInput
            value={fotop}
            placeholder="Digite o link da imagem da Fruta"
            style={estilo.textInputTodos}
            onChangeText={setFotop}
            />
            <TouchableOpacity style={estilo.botaoCadastrar} onPress={cadastro}>
                <Text style={estilo.textoBotaoCadastrar}>Cadastrar</Text>

            </TouchableOpacity>
            
        </View>
    );
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    botaoCadastrar:{
        backgroundColor: '#B2FF66',
        marginTop:30,
        margin:15,
        padding:5,
        borderRadius:10,
        width: 100,
        borderColor:'#000000',
        borderWidth: 1,
        borderStyle: "solid",
        
    },
    textoBotaoCadastrar:{
      
 fontSize:20,

    },

    textInputTodos:{
        fontSize:19,
        margin:10

    }
})