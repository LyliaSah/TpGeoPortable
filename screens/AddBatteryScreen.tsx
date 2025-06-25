import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Battery from 'expo-battery';

export default function AddBatteryScreen() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  async function getBatteryLevel() {
    const level = await Battery.getBatteryLevelAsync();
    setBatteryLevel(Math.round(level * 100));
  }

  return (
    <View style={styles.container}>
      <Button title="Afficher niveau batterie" onPress={getBatteryLevel} />
      {batteryLevel !== null && (
        <Text style={styles.text}>Niveau de batterie : {batteryLevel}%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginTop: 20, fontSize: 18 },
});
