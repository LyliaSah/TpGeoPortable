import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin() {
    // Exemple simple (à remplacer par appel API réel)
    if (username === 'user' && password === 'pass') {
      await AsyncStorage.setItem('token', 'fake-jwt-token');
      navigation.replace('Main');
    } else {
      setError('Identifiants invalides');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Connexion</Text>
      <TextInput
        placeholder="Utilisateur"
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: {
    borderWidth: 1,
    marginVertical: 8,
    padding: 8,
    borderRadius: 5,
    borderColor: '#ccc',
  },
});
