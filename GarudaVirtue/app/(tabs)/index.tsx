import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#3b0a0a" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">GarudaVirtue</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Brief Description</ThemedText>
        <ThemedText>
          GarudaVirtue merupakan sebuah platform website yang dirancang khusus
          untuk mendukung proses pembelajaran mahasiswa Institut Teknologi
          Bandung (ITB), terutama bagi mahasiswa tingkat pertama (Tahun Pertama
          Bersama atau TPB). Platform ini berfokus pada mata kuliah Pancasila
          dan Pendidikan Kewarganegaraan (KU2071), yang merupakan salah satu
          mata kuliah wajib di ITB. Dengan hadirnya GarudaVirtue, diharapkan
          mahasiswa dapat mengakses materi pembelajaran yang disajikan dengan
          cara yang lebih interaktif dan menarik.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}></ThemedView>
      <ThemedView style={styles.stepContainer}></ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
