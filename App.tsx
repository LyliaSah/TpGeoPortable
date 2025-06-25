import React from 'react';
import AppNavigator from './AppNavigator';

export default function App() {
  return <AppNavigator />;
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator'; // ou ton fichier de navigation

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}