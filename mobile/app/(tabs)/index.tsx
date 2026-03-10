import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { theme } from '../../src/theme/theme';
import { checkGeofence } from '../../src/utils/geofencing';
import { useRouter } from 'expo-router';

// Mock location for the office
const OFFICE_LOCATION = {
  latitude: -8.8368,
  longitude: 13.2344,
  radius: 200, // meters
};

export default function DashboardPonto() {
  const router = useRouter();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [inRange, setInRange] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    checkLocation();
    return () => clearInterval(timer);
  }, []);

  const checkLocation = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Negada', 'A localização é necessária para bater o ponto.');
      setLoading(false);
      return;
    }

    let userLoc = await Location.getCurrentPositionAsync({});
    setLocation(userLoc);
    const valid = await checkGeofence(userLoc, OFFICE_LOCATION);
    setInRange(valid);
    setLoading(false);
  };

  const handlePunch = async () => {
    if (!inRange) {
      router.push('/(tabs)/ponto/blocked');
      return;
    }

    // Logic for Supabase Punch In/Out would go here
    setIsClockedIn(!isClockedIn);
    Alert.alert(
      isClockedIn ? 'Saída Registada' : 'Entrada Registada',
      `Ponto registado com sucesso às ${new Date().toLocaleTimeString()}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{new Date().toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      <View style={styles.statusCard}>
        <View style={styles.statusHeader}>
          <Text style={styles.statusTitle}>Localização Atual</Text>
          <TouchableOpacity onPress={checkLocation}>
            <Text style={styles.refreshIcon}>🔄</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator color={theme.colors.primary} />
        ) : (
          <>
            <Text style={[styles.statusText, inRange ? styles.success : styles.error]}>
              {inRange ? 'Dentro do Perímetro (Escritório)' : 'Fora do Perímetro Permitido'}
            </Text>
            <Text style={styles.gpsInfo}>
              Distância: {inRange ? '< 200m' : '> 200m'}
            </Text>
          </>
        )}
      </View>

      <View style={styles.punchArea}>
        <TouchableOpacity
          style={[styles.punchButton, isClockedIn ? styles.punchButtonOut : styles.punchButtonIn]}
          onPress={handlePunch}
        >
          <Text style={styles.punchIcon}>{isClockedIn ? '📤' : '📥'}</Text>
          <Text style={styles.punchLabel}>{isClockedIn ? 'Check Out' : 'Check In'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>08:00</Text>
          <Text style={styles.summaryLabel}>Entrada</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>--:--</Text>
          <Text style={styles.summaryLabel}>Saída</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>04h 20m</Text>
          <Text style={styles.summaryLabel}>Trabalhado</Text>
        </View>
      </View>
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
    alignItems: 'center',
    marginTop: 48,
    marginBottom: 48,
  },
  date: {
    fontSize: 18,
    color: theme.colors.accent,
    textTransform: 'capitalize',
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginTop: 8,
  },
  statusCard: {
    backgroundColor: theme.colors.surface,
    padding: 20,
    borderRadius: 16,
    marginBottom: 48,
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statusTitle: {
    color: theme.colors.accent,
    fontSize: 14,
    fontWeight: 'bold',
  },
  refreshIcon: {
    fontSize: 18,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  gpsInfo: {
    color: theme.colors.accent,
    fontSize: 14,
  },
  success: { color: theme.colors.success },
  error: { color: theme.colors.error },
  punchArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  punchButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  punchButtonIn: { backgroundColor: theme.colors.primary },
  punchButtonOut: { backgroundColor: theme.colors.error },
  punchIcon: { fontSize: 60, marginBottom: 8 },
  punchLabel: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface,
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
  },
  summaryItem: { alignItems: 'center' },
  summaryValue: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text },
  summaryLabel: { fontSize: 12, color: theme.colors.accent, marginTop: 4 },
});
