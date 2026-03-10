import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../../src/theme/theme';
import { useRouter } from 'expo-router';

export default function BlockedPerimeter() {
      const router = useRouter();

      return (
            <View style={styles.container}>
                  <View style={styles.iconContainer}>
                        <Text style={styles.icon}>📍</Text>
                        <Text style={styles.warningIcon}>⚠️</Text>
                  </View>

                  <Text style={styles.title}>Fora do Perímetro</Text>
                  <Text style={styles.description}>
                        Não foi possível registar o seu ponto porque se encontra fora da área permitida para o seu local de trabalho.
                  </Text>

                  <View style={styles.infoCard}>
                        <Text style={styles.infoText}>Local: Escritório Central</Text>
                        <Text style={styles.infoText}>Raio Permitido: 200m</Text>
                  </View>

                  <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.back()}
                  >
                        <Text style={styles.buttonText}>Tentar Novamente</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.supportButton}>
                        <Text style={styles.supportText}>Contactar Suporte/RH</Text>
                  </TouchableOpacity>
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 32,
      },
      iconContainer: {
            position: 'relative',
            marginBottom: 32,
      },
      icon: {
            fontSize: 80,
      },
      warningIcon: {
            fontSize: 32,
            position: 'absolute',
            bottom: -10,
            right: -10,
      },
      title: {
            fontSize: 28,
            fontWeight: 'bold',
            color: theme.colors.error,
            marginBottom: 16,
      },
      description: {
            fontSize: 16,
            color: theme.colors.text,
            textAlign: 'center',
            lineHeight: 24,
            marginBottom: 32,
      },
      infoCard: {
            backgroundColor: theme.colors.surface,
            padding: 16,
            borderRadius: 12,
            width: '100%',
            marginBottom: 48,
      },
      infoText: {
            color: theme.colors.accent,
            fontSize: 14,
            marginBottom: 8,
            textAlign: 'center',
      },
      button: {
            backgroundColor: theme.colors.primary,
            padding: 18,
            borderRadius: 12,
            width: '100%',
            alignItems: 'center',
            marginBottom: 16,
      },
      buttonText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
      },
      supportButton: {
            padding: 12,
      },
      supportText: {
            color: theme.colors.accent,
            fontSize: 14,
            textDecorationLine: 'underline',
      },
});
