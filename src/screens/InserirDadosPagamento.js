import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InserirDadosPagamento = ({ route, navigation }) => {
  const { contrato } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Contrato de {contrato}</Text>
      </View>

      <Text style={styles.subtitle}>Insira seus dados</Text>

      {/* Nome do cartão (deixa como estava) */}
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome do cartão"
          placeholderTextColor="#999"
        />
      </View>

      {/* Número do cartão (deixa como estava) */}
      <View style={styles.inputContainer}>
        <Ionicons name="card" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Número do cartão"
          keyboardType="numeric"
          placeholderTextColor="#999"
        />
      </View>

      {/* Data e CVC (lado a lado) */}
      <View style={styles.row}>
        <View style={styles.smallInputContainer}>
          <Ionicons name="calendar" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.smallInput}
            placeholder="MM/AA"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.smallInputContainer}>
          <Ionicons name="lock-closed" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.smallInput}
            placeholder="CVC"
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.saveOption}
        onPress={() => alert('Salvar este cartão')}
      >
        {/* <Ionicons name="md-save" size={20} color="#1E90FF" /> */}
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
  },
  subtitle: {
    marginBottom: 30,
    fontSize: 18,
    fontWeight: '500',
    color: '#8F8F8F',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 15, // Mantém os inputs independentes
  },
  smallInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#999',
    borderWidth: 1,
    width: '48%', // Ajuste para reduzir o tamanho
  },
  icon: {
    padding: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  smallInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  saveOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  saveOptionText: {
    fontSize: 16,
    color: '#1E90FF',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#FFD942',
    padding: 15,  
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,  
    fontWeight: 'bold',
    color: '#FFF',
  },
});


export default InserirDadosPagamento;
