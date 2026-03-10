import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '../src/theme/theme';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
      const router = useRouter();

      return (
            <ScrollView style={styles.container}>
                  <View style={styles.header}>
                        <View style={styles.avatarPlaceholder}>
                              <Text style={styles.avatarText}>JD</Text>
                        </View>
                        <Text style={styles.name}>João Domingos</Text>
                        <Text style={styles.role}>Consultor de TI</Text>
                  </View>

                  <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Segurança</Text>
                        <TouchableOpacity style={styles.listItem}>
                              <View>
                                    <Text style={styles.itemTitle}>Biometria Digital</Text>
                                    <Text style={styles.itemSubtitle}>Ativada</Text>
                              </View>
                              <Text style={styles.statusBadge}>OK</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.listItem} onPress={() => router.push('/enrollment')}>
                              <View>
                                    <Text style={styles.itemTitle}>Recadastrar Biometria</Text>
                                    <Text style={styles.itemSubtitle}>Atualizar dados de acesso</Text>
                              </View>
                        </TouchableOpacity>
                  </View>

                  <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Preferências</Text>
                        <TouchableOpacity style={styles.listItem}>
                              <Text style={styles.itemTitle}>Notificações de Ponto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listItem}>
                              <Text style={styles.itemTitle}>Modo Escuro</Text>
                        </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.logoutButton}>
                        <Text style={styles.logoutText}>Terminar Sessão</Text>
                  </TouchableOpacity>
            </ScrollView>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: theme.colors.background,
      },
      header: {
            alignItems: 'center',
            paddingVertical: 48,
            backgroundColor: theme.colors.surface,
      },
      avatarPlaceholder: {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 16,
      },
      avatarText: {
            fontSize: 32,
            fontWeight: 'bold',
            color: theme.colors.text,
      },
      name: {
            fontSize: 22,
            fontWeight: 'bold',
            color: theme.colors.text,
      },
      role: {
            fontSize: 16,
            color: theme.colors.accent,
            marginTop: 4,
      },
      section: {
            padding: 24,
      },
      sectionTitle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: theme.colors.accent,
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: 16,
      },
      listItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.surface,
      },
      itemTitle: {
            fontSize: 16,
            color: theme.colors.text,
            fontWeight: '500',
      },
      itemSubtitle: {
            fontSize: 14,
            color: theme.colors.accent,
            marginTop: 2,
      },
      statusBadge: {
            backgroundColor: theme.colors.success,
            color: '#fff',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 4,
            fontSize: 12,
            fontWeight: 'bold',
      },
      logoutButton: {
            margin: 24,
            padding: 18,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: theme.colors.error,
            alignItems: 'center',
      },
      logoutText: {
            color: theme.colors.error,
            fontSize: 16,
            fontWeight: 'bold',
      },
});
