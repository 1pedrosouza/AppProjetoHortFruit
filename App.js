import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import RotasTab from './pages/RotasTab';

export default function App() {
  return (
    <NavigationContainer>
      <RotasTab />
    </NavigationContainer>   
  );
}

