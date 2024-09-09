import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Concluido = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SelecionarContrato')}>
      <View style={styles.checkmarkContainer}>
        <Ionicons name="checkmark-circle" size={170} color="#FFD942" />
      </View>
      
      <Text style={styles.message}>Concluído</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  checkmarkContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  message: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
});

export default Concluido;
