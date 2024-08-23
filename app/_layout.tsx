import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Header from '@/components/Header';

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack screenOptions={{ header: () => <Header title="Lista de Tarefas" /> }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}