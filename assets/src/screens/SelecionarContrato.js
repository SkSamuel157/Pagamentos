import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SelecionarContrato = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagamento</Text>
            <Text style={styles.subtitle}>Selecione seu contrato</Text>

            <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('EscolherPagamento', { contrato: '12 meses' })}
            >
                <Text style={styles.optionText}>Contrato de 12 meses</Text>
                <Text style={styles.optionSubText}>12</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('EscolherPagamento', { contrato: '6 meses' })}
            >
                <Text style={styles.optionText}>Contrato de 6 meses</Text>
                <Text style={styles.optionSubText}>6</Text>
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
    option: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    optionText: {
        fontSize: 18,
        color: '#333',
    },
    optionSubText: {
        fontSize: 18,
        color: '#fbc02d',
    },
});

export default SelecionarContrato;
