import React from 'react';
import { View } from 'react-native';
import Main from './src/telas/Main';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastrar from './src/telas/Cadastrar';

import ContextProvider from './src/contexts/MeuContexto';


const Stack = createNativeStackNavigator()

export default function App() {
 return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Main} />
            <Stack.Screen name="cadastrar" component={Cadastrar} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  
   
  )
}