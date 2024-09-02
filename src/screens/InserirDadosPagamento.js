import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InserirDadosPagamento = ({ route, navigation }) => {
  const { contrato, metodo } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Contrato de {contrato}</Text>
      </View>

      <Text style={styles.subtitle}>Insira seus dados</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do cartão"
      />
      <TextInput
        style={styles.input}
        placeholder="Número do cartão"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de validade (MM/AA)"
      />
      <TextInput
        style={styles.input}
        placeholder="CVC"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.saveOption}
        onPress={() => alert('Salvar este cartão')}
      >
        <Text style={styles.saveOptionText}>Salvar este cartão</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Concluido')}
      >
        <Text style={styles.buttonText}>Concluir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  saveOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  saveOptionText: {
    fontSize: 16,
    color: '#1E90FF',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default InserirDadosPagamento;
