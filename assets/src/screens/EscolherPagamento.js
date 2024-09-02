import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EscolherPagamento = ({ route, navigation }) => {
    const { contrato } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contrato de {contrato}</Text>
            <Text style={styles.subtitle}>Selecione a forma de pagamento</Text>

            <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('InserirDadosPagamento', { metodo: 'Cartão de Crédito' })}
            >
                <Text style={styles.optionText}>Cartão de Crédito</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('InserirDadosPagamento', { metodo: 'Cartão de Débito' })}
            >
                <Text style={styles.optionText}>Cartão de Débito</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.option}
                onPress={() => navigation.navigate('InserirDadosPagamento', { metodo: 'Pix' })}
            >
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
    addOption: {
        marginTop: 20,
        alignItems: 'center',
    },
    addOptionText: {
        fontSize: 16,
        color: '#007bff',
    },
});

export default EscolherPagamento;
