import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native';
import {pesquisarNomeFruta} from '../pages/Frutas/ModelFrutas';

export default function Pesquisa(){
const [dadosFrutas, setdadosFrutas] = useState([]);

async function buscarFrutas(){
  const resultado = await pesquisarNomeFruta(nomeFruta);
  if(resultado){
    setdadosFrutas(resultado);
  } else {
    Alert.alert('Fruta não encontrada!!');
    setdadosFrutas('')

  }
}

    return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Qual Fruta Voce Quer?</Text>
      <TextInput
      placeholder='Digite uma fruta.'
      style={estilo.textInput}
      />
      <TouchableOpacity style={estilo.botao} onPress={()=>buscarFrutas()}>

        <Text style={estilo.textBotao}>Pesquisar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    );
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titulo:{
      fontSize: 25,
      marginBottom:25 ,
    },

    textInput:{
    
    
    
      
     

    },

    botao:{
      backgroundColor: '#FF6464',
      marginTop: 25,
      padding:10,
      borderRadius:15,
      width: '80%',

    },

    textBotao:{
      marginLeft: 120,

    },
  });