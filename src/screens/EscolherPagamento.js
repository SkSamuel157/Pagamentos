import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EscolherPagamento = ({ route, navigation }) => {
  const { contrato } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Contrato de {contrato}</Text>
      </View>

      <Text style={styles.subtitle}>Selecione a forma de pagamento</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('InserirDadosPagamento', { contrato, metodo: 'Cartão de Crédito' })}
      >
        <Image
          source={require('./assets/credito.png')}
          style={styles.optionImage}
        />
        <Text style={styles.optionText}>Cartão de Crédito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('InserirDadosPagamento', { contrato, metodo: 'Cartão de Débito' })}
      >
        <Image
          source={require('./assets/debito.png')}
          style={styles.optionImage}
        />
        <Text style={styles.optionText}>Cartão de Débito</Text>
      </TouchableOpacity>

      {/* Navegação para a página PixPagamento */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('PixPagamento', { contrato })}
      >
        <Image
          source={require('./assets/pix.png')}
          style={styles.optionImage}
        />
        <Text style={styles.optionText}>Transferência Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addOption}
        onPress={() => alert('Adicionar nova forma de pagamento')}
      >
        <Text style={styles.addOptionText}>Adicionar uma nova forma de pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 25,
  },
  subtitle: {
    marginBottom: 25,
    fontWeight: '500',
    color: '#8F8F8F',
  },
  option: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 20,
    marginBottom: 35,
    elevation: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionImage: {
    width: 60,
    height: 35,
    marginRight: 45,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 70,
  },
  addOption: {
    marginTop: 20,
    alignItems: 'center',
  },
  addOptionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
});

export default EscolherPagamento;

