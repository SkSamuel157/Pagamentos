import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { collection, addDoc } from 'firebase/firestore'; // Importa o Firestore
import { db } from '../../firebaseConfig';

const InserirDadosPagamento = ({ route, navigation }) => {
  const { contrato } = route.params;

  // Estados para armazenar os dados do formulário
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [cvc, setCvc] = useState('');
  const [salvarCartao, setSalvarCartao] = useState(false); // Estado para o ícone de salvar cartão

  // Função para salvar o pagamento no Firestore
  const concluirPagamento = async () => {
    if (!nomeCartao || !numeroCartao || !dataValidade || !cvc) {
      console.log("Por favor, preencha todos os campos!");
      return;
    }

    try {
      // Adiciona os dados do pagamento no Firestore
      await addDoc(collection(db, "pagamentos"), {
        nome: nomeCartao,
        numero: numeroCartao,
        validade: dataValidade,
        cvc: cvc,
        valor: '250', // Ajuste para pegar o valor correto, se necessário
        status: 'pago'
      });

      // Se o usuário selecionar "Salvar este cartão", salva também os dados do cartão separadamente
      if (salvarCartao) {
        await addDoc(collection(db, "cartoesSalvos"), {
          nome: nomeCartao,
          numero: numeroCartao,
          validade: dataValidade,
          cvc: cvc
        });
      }

      // Navega para a tela de Concluído após salvar
      navigation.navigate('Concluido');
    } catch (e) {
      console.error("Erro ao salvar pagamento: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Contrato de {contrato}</Text>
      </View>

      <Text style={styles.subtitle}>Insira seus dados</Text>

      {/* Nome do cartão */}
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome do cartão"
          placeholderTextColor="#999"
          value={nomeCartao}
          onChangeText={setNomeCartao}
        />
      </View>

      {/* Número do cartão */}
      <View style={styles.inputContainer}>
        <Ionicons name="card" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Número do cartão"
          keyboardType="numeric"
          placeholderTextColor="#999"
          value={numeroCartao}
          onChangeText={setNumeroCartao}
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
            value={dataValidade}
            onChangeText={setDataValidade}
          />
        </View>

        <View style={styles.smallInputContainer}>
          <Ionicons name="lock-closed" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.smallInput}
            placeholder="CVC"
            keyboardType="numeric"
            placeholderTextColor="#999"
            value={cvc}
            onChangeText={setCvc}
          />
        </View>
      </View>

      {/* Ícone para salvar o cartão */}
      <TouchableOpacity
        style={styles.saveOption}
        onPress={() => setSalvarCartao(!salvarCartao)} // Alterna entre salvar ou não salvar o cartão
      >
        <Ionicons
          name={salvarCartao ? "checkbox" : "square-outline"} // Alterna entre um ícone marcado e desmarcado
          size={24}
          color="#1E90FF"
        />
        <Text style={styles.saveOptionText}>Salvar este cartão</Text>
      </TouchableOpacity>

      {/* Botão de Concluir */}
      <TouchableOpacity
        style={styles.button}
        onPress={concluirPagamento} // Chama a função ao concluir
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
    marginBottom: 15, 
  },
  smallInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#999',
    borderWidth: 1,
    width: '48%',
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
    color: '#999',
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
