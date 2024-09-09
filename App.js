import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelecionarContrato from './src/screens/SelecionarContrato';
import EscolherPagamento from './src/screens/EscolherPagamento';
import InserirDadosPagamento from './src/screens/InserirDadosPagamento';
import Concluido from './src/screens/Concluido';
import PagamentoPix from './src/screens/PagamentoPix';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SelecionarContrato" component={SelecionarContrato} options={{ title: 'Pagamento' }} />
        <Stack.Screen name="EscolherPagamento" component={EscolherPagamento} options={{ title: 'Contrato' }} />
        <Stack.Screen name="InserirDadosPagamento" component={InserirDadosPagamento} options={{ title: 'Pagamento' }} />
        <Stack.Screen name="Concluido" component={Concluido} options={{ title: 'Concluído' }} />
        <Stack.Screen name="PagamentoPix" component={PagamentoPix} options={{ title: 'Pagamento Pix' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
