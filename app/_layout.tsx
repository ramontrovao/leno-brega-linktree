import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from '@/views/HomeScreen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Exo-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFB6C1" }}>
      <HomeScreen />
    </SafeAreaView>
  );
}
