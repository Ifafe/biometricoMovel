import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useRouter } from 'expo-router';
import { theme } from '../src/theme/theme';
import { supabase } from '../src/lib/supabase';

export default function BiometricLogin() {
      const router = useRouter();
      const [isBiometricSupported, setIsBiometricSupported] = useState(false);

      useEffect(() => {
            (async () => {
                  const compatible = await LocalAuthentication.hasHardwareAsync();
                  setIsBiometricSupported(compatible);
            })();
      }, []);

      const handleBiometricAuth = async () => {
            try {
                  const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
                  if (!savedBiometrics) {
                        return Alert.alert(
                              'Biometria não cadastrada',
                              'Por favor, cadastre sua biometria nas configurações do aparelho.'
                        );
                  }

                  const result = await LocalAuthentication.authenticateAsync({
                        promptMessage: 'Login Biométrico',
                        fallbackLabel: 'Usar Senha',
                  });

                  if (result.success) {
                        // Here we would normally verify the session or redirect
                        router.push('/(tabs)');
                  } else {
                        Alert.alert('Falha na autenticação', 'Tente novamente.');
                  }
            } catch (error) {
                  Alert.alert('Erro', 'Ocorreu um erro inesperado.');
            }
      };

      return (
            <View style={styles.container}>
                  <View style={styles.header}>
                        <Text style={styles.title}>Bio-Kwenda</Text>
                        <Text style={styles.subtitle}>Olá, confirme sua identidade para continuar</Text>
                  </View>

                  <View style={styles.content}>
                        <TouchableOpacity style={styles.bioButton} onPress={handleBiometricAuth}>
                              <Text style={styles.icon}>👤</Text>
                        </TouchableOpacity>
                        <Text style={styles.hint}>Toque para autenticar</Text>
                  </View>

                  <TouchableOpacity
                        style={styles.passwordButton}
                        onPress={() => router.push('/login')}
                  >
                        <Text style={styles.passwordText}>Entrar com Palavra-passe</Text>
                  </TouchableOpacity>
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            justifyContent: 'center',
            padding: 32,
      },
      header: {
            alignItems: 'center',
            marginBottom: 64,
      },
      title: {
            fontSize: 32,
            fontWeight: 'bold',
            color: theme.colors.text,
            marginBottom: 8,
      },
      subtitle: {
            fontSize: 16,
            color: theme.colors.accent,
            textAlign: 'center',
      },
      content: {
            alignItems: 'center',
            marginBottom: 64,
      },
      bioButton: {
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
      },
      icon: {
            fontSize: 60,
      },
      hint: {
            marginTop: 16,
            color: theme.colors.text,
            fontSize: 16,
      },
      passwordButton: {
            alignItems: 'center',
      },
      passwordText: {
            color: theme.colors.primary,
            fontSize: 16,
            fontWeight: '600',
      },
});
