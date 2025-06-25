import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getBatteryHistory } from './api';

export default function BatteryHistoryScreen() {
  const [history, setHistory] = useState<{ id: string; level: number }[]>([]);

  useEffect(() => {
    async function fetchHistory() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const data = await getBatteryHistory(token);
        setHistory(data);
      }
    }
    fetchHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique des batteries</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>Niveau: {item.level}%</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 10 },
});
