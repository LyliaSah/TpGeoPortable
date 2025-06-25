// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import * as Battery from 'expo-battery';

export default function HomeScreen() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  const getBatteryLevel = async () => {
    try {
      const level = await Battery.getBatteryLevelAsync();
      setBatteryLevel(level);
      Alert.alert('Niveau de batterie', `Batterie à ${(level * 100).toFixed(0)}%`);
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de récupérer le niveau de batterie');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue sur l'écran d'accueil !</Text>
      <Button title="Afficher niveau batterie" onPress={getBatteryLevel} />
      {batteryLevel !== null && (
        <Text style={styles.batteryText}>Niveau batterie : {(batteryLevel * 100).toFixed(0)}%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // fond bleu clair pour être sûr que c'est visible
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
  },
  batteryText: {
    marginTop: 15,
    fontSize: 16,
    color: '#000',
  },
});
