import React, { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { ExpoRoot } from "expo-router";
import { registerRootComponent } from "expo";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

// Must be exported or Fast Refresh won't update the context
export function App() {
  // @ts-ignore
  const ctx = require.context("./src/views");

  const [fontsLoaded] = useFonts({
    'Walsheim-Light': require('./assets/fonts/GTWalsheimPro-Light.ttf'),
    'Walsheim-Regular': require('./assets/fonts/GTWalsheimPro-Regular.ttf'),
    'Walsheim-Medium': require('./assets/fonts/GTWalsheimPro-Medium.ttf'),
    'Walsheim-Bold': require('./assets/fonts/GTWalsheimPro-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}> 
      <ExpoRoot context={ctx} />
    </View>
  );
}

registerRootComponent(App);