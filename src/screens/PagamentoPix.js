import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';  // Importando o QRCode

const PagamentoPix = ({ navigation }) => {
  const pixCode = '00020126330014BR.GOV.BCB.PIX0114+5547999999999204000053039865802BR5925João da Silva Ltda6009SAO PAULO62070503***63041D3F'; // Exemplo de código PIX

  const copyToClipboard = () => {
    Clipboard.setString(pixCode);
    alert('Código PIX copiado!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Pagamento via PIX</Text>
      </View>

      <Text style={styles.subtitle}>Escaneie o código QR abaixo ou copie o código PIX</Text>

      <View style={styles.qrContainer}>
        <QRCode
          value={pixCode}
          size={200}
        />
      </View>

      <TouchableOpacity
        style={styles.copyButton}
        onPress={copyToClipboard}
      >
        <Text style={styles.copyButtonText}>Copiar código PIX</Text>
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
    marginBottom: 40,
    marginTop: 20,
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
    textAlign: 'center',
  },
  qrContainer: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  copyButton: {
    backgroundColor: '#FFD942',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  copyButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default PagamentoPix;
