import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { theme } from '../../src/theme/theme';

const MOCK_HISTORY = [
      { id: '1', date: 'Hoje', in: '08:05', out: '17:20', duration: '9h 15m', status: 'approved' },
      { id: '2', date: 'Ontem', in: '08:12', out: '17:45', duration: '9h 33m', status: 'approved' },
      { id: '3', date: '07 Mar', in: '07:55', out: '17:05', duration: '9h 10m', status: 'approved' },
      { id: '4', date: '06 Mar', in: '08:00', out: '18:30', duration: '10h 30m', status: 'approved' },
      { id: '5', date: '05 Mar', in: '08:20', out: '17:10', duration: '8h 50m', status: 'approved' },
];

export default function AttendanceHistory() {
      return (
            <View style={styles.container}>
                  <View style={styles.header}>
                        <Text style={styles.title}>Histórico de Assiduidade</Text>
                        <TouchableOpacity style={styles.filterBtn}>
                              <Text style={styles.filterText}>Este Mês 🔽</Text>
                        </TouchableOpacity>
                  </View>

                  <FlatList
                        data={MOCK_HISTORY}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                              <View style={styles.card}>
                                    <View style={styles.cardHeader}>
                                          <Text style={styles.cardDate}>{item.date}</Text>
                                          <View style={[styles.statusBadge, { backgroundColor: item.status === 'approved' ? theme.colors.success + '22' : theme.colors.warning + '22' }]}>
                                                <Text style={[styles.statusText, { color: item.status === 'approved' ? theme.colors.success : theme.colors.warning }]}>
                                                      {item.status === 'approved' ? 'VALIDADO' : 'PENDENTE'}
                                                </Text>
                                          </View>
                                    </View>

                                    <View style={styles.details}>
                                          <View style={styles.detailItem}>
                                                <Text style={styles.detailLabel}>Entrada</Text>
                                                <Text style={styles.detailValue}>{item.in}</Text>
                                          </View>
                                          <View style={styles.detailItem}>
                                                <Text style={styles.detailLabel}>Saída</Text>
                                                <Text style={styles.detailValue}>{item.out}</Text>
                                          </View>
                                          <View style={styles.detailItem}>
                                                <Text style={styles.detailLabel}>Total</Text>
                                                <Text style={styles.detailValue}>{item.duration}</Text>
                                          </View>
                                    </View>
                              </View>
                        )}
                        contentContainerStyle={styles.listContent}
                  />
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 24,
            marginBottom: 32,
      },
      title: {
            fontSize: 22,
            fontWeight: 'bold',
            color: theme.colors.text,
            flex: 1,
      },
      filterBtn: {
            backgroundColor: theme.colors.surface,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
      },
      filterText: {
            color: theme.colors.text,
            fontSize: 14,
            fontWeight: '600',
      },
      listContent: {
            paddingBottom: 24,
      },
      card: {
            backgroundColor: theme.colors.surface,
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
      },
      cardHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
            paddingBottom: 12,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.background + '44',
      },
      cardDate: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.colors.text,
      },
      statusBadge: {
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 6,
      },
      statusText: {
            fontSize: 10,
            fontWeight: 'bold',
      },
      details: {
            flexDirection: 'row',
            justifyContent: 'space-between',
      },
      detailItem: {
            flex: 1,
      },
      detailLabel: {
            fontSize: 12,
            color: theme.colors.accent,
            marginBottom: 4,
      },
      detailValue: {
            fontSize: 16,
            fontWeight: '600',
            color: theme.colors.text,
      },
});
