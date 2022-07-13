import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Home from "./Home";
import Pesquisa from "./Pesquisa";
import RotasBotao from "./RotasBotao";


const Tab = createBottomTabNavigator();
export default function RotasTab(){
    return(
      
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
            name="Home"
            component={Home}
                options = {{
                tabBarIcon:({color,size})=><MaterialCommunityIcons
                name="basket-plus" color={color} size ={size}/>}}
            />
            <Tab.Screen
            name="Rotas"
            component={RotasBotao}
                options = {{
                tabBarIcon:({color,size})=><MaterialCommunityIcons
                name="fruit-grapes" color={color} size ={size}/>}}
            />
             <Tab.Screen
            name="Pesquisa"
            component={Pesquisa}
                options = {{
                tabBarIcon:({color,size})=><MaterialCommunityIcons
                name="card-search" color={color} size ={size}/>}}
            />
             
          
            
        </Tab.Navigator>
       
    );
}