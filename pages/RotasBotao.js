import React from "react";
import {createStackNavigator} from '@react-navigation/stack';




const navBotao = createStackNavigator();

import Listar from '../pages/Frutas/ListarFrutas';
import Cadastrar from '../pages/Frutas/CadastrarFruta';
import Alterar from '../pages/Frutas/AlterarFruta';

export default function RotasBotao(){
    return(
       
<navBotao.Navigator>
    <navBotao.Screen name="Listar" component={Listar} options={{headerShown:false}} />
    <navBotao.Screen name="Cadastrar" component={Cadastrar} options={{headerShown:false}} />
    <navBotao.Screen name="Alterar" component={Alterar} options={{headerShown:false}} />
</navBotao.Navigator>

    );
}

