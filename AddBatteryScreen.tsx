import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Battery from 'expo-battery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendBatteryData } from './api';

export default function AddBatteryScreen() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');

  async function getBatteryLevel() {
    const level = await Battery.getBatteryLevelAsync();
    const percent = Math.round(level * 100);
    setBatteryLevel(percent);

    const token = await AsyncStorage.getItem('token');
    if (token) {
      try {
        await sendBatteryData({ level: percent }, token);
        setMessage('Donnée envoyée à l\'API');
      } catch (e) {
        setMessage('Erreur lors de l\'envoi');
      }
    } else {
      setMessage('Utilisateur non connecté');
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Afficher niveau batterie" onPress={getBatteryLevel} />
      {batteryLevel !== null && (
        <Text style={styles.text}>Niveau de batterie : {batteryLevel}%</Text>
      )}
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginTop: 20, fontSize: 18 },
});
