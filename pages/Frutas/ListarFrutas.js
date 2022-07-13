
import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet,FlatList,TouchableOpacity, Alert} from 'react-native';
import { useState , useEffect} from 'react';
import api from '../Api';

export default function ListarFrutas({navigation}){
const [dadosFrutas,setdadosFrutas] = useState([]);

async function getFrutas(){
  try
  {
    const resultado = await api.get(`/hortfruit`);
    return resultado.data
  }catch(error){
    console.log(error)
    return[]
  }
}
useEffect(async() =>{ 
  const resp = await getFrutas()
  setdadosFrutas(resp);
},[]);



    return(
    <View style={estilo.container}>


<TouchableOpacity style={estilo.botaoCadFruta} onPress={()=>navigation.navigate('Cadastrar')}>
    <Text style={estilo.botaoTextoCadFruta}>Cadastrar Fruta</Text>
</TouchableOpacity>

<TouchableOpacity style={estilo.botaoCadFruta} onPress={()=> navigation.navigate('Alterar')}>
    <Text style={estilo.botaoTextoCadFruta}>Alterar/Deletar Fruta</Text>
</TouchableOpacity>
<Text style={estilo.titulo}>Lista de Frutas</Text>

      <FlatList
      
      data={dadosFrutas}
      keyExtractor={dadosFrutas => dadosFrutas.id}
      renderItem={({item})=>
      
      <TouchableOpacity>
      <View style={estilo.grupoFrutas}>

     
          <Text style={estilo.textoBotaoFruta}>{item.fruta}</Text>
          <Text style={estilo.textoBotaoValor}>{item.valor}</Text>

          </View>
        </TouchableOpacity>

      
    }
      
      />

      <StatusBar style="auto" />
    </View>
    );
}



const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     
    },

    titulo:{
      fontSize:30,
      color:'#000000',
      textAlign: 'center',
      justifyContent: 'center',
      marginVertical:20

    },
    

    grupoFrutas:{
      backgroundColor:'#FF9E9E',
      margin:15,
      padding:5,
      borderRadius:10,
      alignItems:'center',
      justifyContent: 'center',
    },

    textoBotaoFruta:{
      fontSize:20,
      
     },
 
     textoBotaoValor:{
      fontSize:20,
     },

     botaoCadFruta:{
        backgroundColor:'#FF9E9E',
        margin:15,
      padding:5,
      borderRadius:10,
     },

     botaoTextoCadFruta:{
        fontSize:20
     }
    
  });   
