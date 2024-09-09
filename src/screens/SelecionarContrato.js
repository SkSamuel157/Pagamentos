import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SelecionarContrato = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Pagamento</Text>
      </View>

      <Text style={styles.subtitle}>Selecione seu contrato</Text>

      <TouchableOpacity

        style={styles.option}
        onPress={() => navigation.navigate('EscolherPagamento', { contrato: '12 meses' })}
      >
        <Text style={styles.optionText}>Contrato de 12 meses</Text>
        <Text style={styles.optionTextTwo}> 12 </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('EscolherPagamento', { contrato: '6 meses' })}
      >
        <Text style={styles.optionText}>Contrato de 6 meses</Text>
        <Text style={styles.optionTextTwo}> 6 </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFf',
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
    padding: 30,
    borderRadius: 20,
    marginBottom: 45,
    elevation: 15,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 70,
  },
  optionTextTwo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD942',
  },
});

export default SelecionarContrato;
