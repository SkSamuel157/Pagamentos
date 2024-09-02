import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InserirDadosPagamento = ({ route, navigation }) => {
    const { metodo } = route.params;
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [validade, setValidade] = useState('');
    const [cvc, setCvc] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagamento com {metodo}</Text>
            <Text style={styles.subtitle}>Insira seus dados</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome no cartão"
                value={nomeCartao}
                onChangeText={setNomeCartao}
            />

            <TextInput
                style={styles.input}
                placeholder="Número do cartão"
                value={numeroCartao}
                onChangeText={setNumeroCartao}
                keyboardType="numeric"
            />

            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="MM/AA"
                    value={validade}
                    onChangeText={setValidade}
                    keyboardType="numeric"
                />
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="CVC"
                    value={cvc}
                    onChangeText={setCvc}
                    keyboardType="numeric"
                />
            </View>

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
        backgroundColor: '#f0f4ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 40,
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    button: {
        backgroundColor: '#fbc02d',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default InserirDadosPagamento;
