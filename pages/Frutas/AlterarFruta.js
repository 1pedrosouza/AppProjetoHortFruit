import React,{useState} from "react";
import { Text,View,StyleSheet,Alert,TouchableOpacity,TextInput } from "react-native";
import {alterarFrutas,deletarFrutas} from './ModelFrutas';
import {useFonts,Jost_400Regular,} from '@expo-google-fonts/inter'

export default function AlterarFruta({navigation}){
    const [idp, setIdp] =useState('');
    const [frutap, setFrutap] =useState('');
    const [valorp, setValorp] =useState('');
    const [fotop, setFotop] =useState('');

    async function alterar(){
        const resultado = await alterarFrutas(idp,frutap,valorp,fotop);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta alterada com Sucesso!!');
            navigation.goBack();
        }else{
            Alert.alert('Erro ao alterar a fruta');
        }
    }

    async function deletar(){
        const resultado = await deletarFrutas(idp);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta deletada com Sucesso!!');
            props.navigation.goBack();
        }else{
            Alert.alert('Erro ao deletar a fruta');
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
            <TouchableOpacity style={estilo.botaoAlterar} onPress={alterar}>
                <Text style={estilo.textoBotaoAlterar}>Alterar</Text>

            </TouchableOpacity>

            <TouchableOpacity style={estilo.botaoExcluir} onPress={deletar}>
                <Text style={estilo.textoBotaoExcluir}>Excluir</Text>

            </TouchableOpacity>
            
        </View>
    );
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'
    },
    botaoAlterar:{
        backgroundColor: '#F1FF63',
        margin:15,
        padding:5,
        borderRadius:10,
        width: 100,
        borderColor:'#000000',
        borderWidth: 1,
        borderStyle: "solid",
        
    },

    textoBotaoAlterar:{
        marginLeft: 23,
    },

    botaoExcluir:{
        backgroundColor: '#FF0000',
        margin:15,
        padding:5,
        borderRadius:10,
        width: 100,
        borderColor:'#000000',
        borderWidth: 1,
        borderStyle: "solid",
        
        
        
    },

    textoBotaoExcluir:{
        marginLeft: 23,
        fontFamily: Jost_400Regular
        
    },

    textInputTodos:{
        fontSize:19,
        margin:8
        
    }
})