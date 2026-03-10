import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import { theme } from '../../src/theme/theme';
import { PontoQueue, PontoEntry } from '../../src/utils/ponto-queue';

export default function OfflineSync() {
      const [queue, setQueue] = useState<PontoEntry[]>([]);
      const [syncing, setSyncing] = useState(false);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            loadQueue();
      }, []);

      const loadQueue = async () => {
            setLoading(true);
            const data = await PontoQueue.get();
            setQueue(data);
            setLoading(false);
      };

      const handleSync = async () => {
            setSyncing(true);
            const result = await PontoQueue.sync();
            setSyncing(false);

            if (result.success) {
                  Alert.alert('Sincronização Concluída', `${result.count} registos sincronizados!`);
                  setQueue([]);
            } else {
                  Alert.alert('Erro na Sincronização', 'Verifique a sua ligação à internet.');
            }
      };

      return (
            <View style={styles.container}>
                  <View style={styles.header}>
                        <Text style={styles.title}>Registos Pendentes</Text>
                        <Text style={styles.subtitle}>
                              {queue.length} registos guardados offline aguardando sincronização.
                        </Text>
                  </View>

                  {loading ? (
                        <ActivityIndicator size="large" color={theme.colors.primary} />
                  ) : (
                        <FlatList
                              data={queue}
                              keyExtractor={(item) => item.id}
                              renderItem={({ item }) => (
                                    <View style={styles.item}>
                                          <View>
                                                <Text style={styles.itemType}>📤 Ponto Registado</Text>
                                                <Text style={styles.itemTime}>{new Date(item.timestamp).toLocaleString('pt-PT')}</Text>
                                          </View>
                                          <Text style={styles.itemStatus}>OFFLINE</Text>
                                    </View>
                              )}
                              ListEmptyComponent={
                                    <View style={styles.empty}>
                                          <Text style={styles.emptyIcon}>☁️</Text>
                                          <Text style={styles.emptyText}>Sem registos pendentes de sincronização.</Text>
                                    </View>
                              }
                              contentContainerStyle={styles.listContent}
                        />
                  )}

                  {queue.length > 0 && (
                        <TouchableOpacity
                              style={styles.syncButton}
                              onPress={handleSync}
                              disabled={syncing}
                        >
                              {syncing ? (
                                    <ActivityIndicator color="#fff" />
                              ) : (
                                    <Text style={styles.syncButtonText}>Sincronizar Agora</Text>
                              )}
                        </TouchableOpacity>
                  )}
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            padding: 24,
      },
      header: {
            marginTop: 24,
            marginBottom: 32,
      },
      title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.text,
      },
      subtitle: {
            fontSize: 16,
            color: theme.colors.accent,
            marginTop: 8,
      },
      listContent: {
            flexGrow: 1,
      },
      item: {
            backgroundColor: theme.colors.surface,
            padding: 16,
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
      },
      itemType: {
            fontSize: 16,
            fontWeight: '600',
            color: theme.colors.text,
      },
      itemTime: {
            fontSize: 14,
            color: theme.colors.accent,
            marginTop: 4,
      },
      itemStatus: {
            color: theme.colors.warning,
            fontSize: 12,
            fontWeight: 'bold',
            opacity: 0.8,
      },
      empty: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 64,
      },
      emptyIcon: {
            fontSize: 64,
            marginBottom: 16,
            opacity: 0.5,
      },
      emptyText: {
            color: theme.colors.accent,
            fontSize: 16,
            textAlign: 'center',
      },
      syncButton: {
            backgroundColor: theme.colors.primary,
            padding: 18,
            borderRadius: 12,
            alignItems: 'center',
            marginBottom: 24,
      },
      syncButtonText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
      },
});
