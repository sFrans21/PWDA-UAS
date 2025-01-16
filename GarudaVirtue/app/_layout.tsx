import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
// import { SplashScreen } from '../components/splashscreen';

import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="silabus"
          options={{ title: "Silabus", headerShown: true }}
        />
        <Stack.Screen
          name="modul/modul1"
          options={{ title: "Modul 1", headerShown: true }}
        />
        <Stack.Screen
          name="modul/modul2"
          options={{ title: "Modul 2", headerShown: true }}
        />
        <Stack.Screen
          name="modul/modul3"
          options={{ title: "Modul 3", headerShown: true }}
        />
        <Stack.Screen
          name="modul/modul4"
          options={{ title: "Modul 4", headerShown: true }}
        />
        <Stack.Screen
          name="modul/modul5"
          options={{ title: "Modul 5", headerShown: true }}
        />
        <Stack.Screen
          name="modul/modul6"
          options={{ title: "Modul 6", headerShown: true }}
        />

        <Stack.Screen
          name="videos/vid1"
          options={{ title: "Video 1", headerShown: true }}
        />
        <Stack.Screen
          name="videos/vid2"
          options={{ title: "Video 2", headerShown: true }}
        />
        <Stack.Screen
          name="videos/vid3"
          options={{ title: "Video 3", headerShown: true }}
        />
        <Stack.Screen
          name="videos/vid4"
          options={{ title: "Video 4", headerShown: true }}
        />
        <Stack.Screen
          name="videos/vid5"
          options={{ title: "Video 5", headerShown: true }}
        />
        <Stack.Screen
          name="videos/vid6"
          options={{ title: "Video 6", headerShown: true }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
