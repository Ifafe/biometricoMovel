import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '../src/theme/theme';

export default function BiometricEnrollment() {
      const router = useRouter();
      const [step, setStep] = useState(1);

      const steps = [
            { title: 'Início', desc: 'Prepare o seu sensor de biometria.' },
            { title: 'Captura', desc: 'Posicione o seu dedo ou face no sensor.' },
            { title: 'Validação', desc: 'Estamos a validar os seus dados biométricos.' },
            { title: 'Concluído', desc: 'Biometria cadastrada com sucesso!' },
      ];

      const nextStep = () => {
            if (step < 4) setStep(step + 1);
            else router.push('/(tabs)');
      };

      return (
            <View style={styles.container}>
                  <View style={styles.progressContainer}>
                        {steps.map((_, i) => (
                              <View
                                    key={i}
                                    style={[
                                          styles.progressDot,
                                          i + 1 <= step ? styles.progressDotActive : {}
                                    ]}
                              />
                        ))}
                  </View>

                  <ScrollView contentContainerStyle={styles.content}>
                        <Text style={styles.stepTitle}>Passo {step}: {steps[step - 1].title}</Text>
                        <Text style={styles.stepDesc}>{steps[step - 1].desc}</Text>

                        <View style={styles.visualizer}>
                              {step === 1 && <Text style={styles.visualIcon}>📱</Text>}
                              {step === 2 && <Text style={styles.visualIcon}>☝️</Text>}
                              {step === 3 && <Text style={styles.visualIcon}>⏳</Text>}
                              {step === 4 && <Text style={styles.visualIcon}>✅</Text>}
                        </View>
                  </ScrollView>

                  <TouchableOpacity style={styles.button} onPress={nextStep}>
                        <Text style={styles.buttonText}>
                              {step === 4 ? 'Começar a Usar' : 'Próximo Passo'}
                        </Text>
                  </TouchableOpacity>
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            padding: 24,
      },
      progressContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 48,
            gap: 8,
      },
      progressDot: {
            width: 40,
            height: 6,
            borderRadius: 3,
            backgroundColor: theme.colors.surface,
      },
      progressDotActive: {
            backgroundColor: theme.colors.primary,
      },
      content: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      stepTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.text,
            marginBottom: 16,
            textAlign: 'center',
      },
      stepDesc: {
            fontSize: 16,
            color: theme.colors.accent,
            textAlign: 'center',
            paddingHorizontal: 32,
            lineHeight: 24,
      },
      visualizer: {
            width: 200,
            height: 200,
            borderRadius: 100,
            backgroundColor: theme.colors.surface,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 48,
      },
      visualIcon: {
            fontSize: 80,
      },
      button: {
            backgroundColor: theme.colors.primary,
            padding: 18,
            borderRadius: 12,
            alignItems: 'center',
            marginBottom: 24,
      },
      buttonText: {
            color: theme.colors.text,
            fontSize: 18,
            fontWeight: 'bold',
      },
});
