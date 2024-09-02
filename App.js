import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelecionarContrato from './src/screens/SelecionarContrato';
import EscolherPagamento from './src/screens/EscolherPagamento';
import InserirDadosPagamento from './src/screens/InserirDadosPagamento';
import Concluido from './src/screens/Concluido';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelecionarContrato">
        <Stack.Screen name="SelecionarContrato" component={SelecionarContrato} options={{ title: 'Pagamento' }} />
        <Stack.Screen name="EscolherPagamento" component={EscolherPagamento} options={{ title: 'Contrato' }} />
        <Stack.Screen name="InserirDadosPagamento" component={InserirDadosPagamento} options={{ title: 'Pagamento' }} />
        <Stack.Screen name="Concluido" component={Concluido} options={{ title: 'Concluído' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
