import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Concluido = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://img.icons8.com/color/96/000000/checkmark.png' }}
                style={styles.icon}
            />
            <Text style={styles.message}>Concluído</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4ff',
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    message: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Concluido;

