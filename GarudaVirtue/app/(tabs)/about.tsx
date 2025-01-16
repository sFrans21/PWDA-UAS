import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>GarudaVirtue</Text>
      </View>

      <Image
        source={require("@/assets/images/edunex.png")}
        style={styles.image}
      />

      <Text style={styles.heading}>
        Pancasila dan Pendidikan Kewarganegaraan
      </Text>
      <Text style={styles.description}>
        GarudaVirtue merupakan platform pembelajaran interaktif yang dirancang
        untuk mendukung proses pembelajaran mahasiswa Institut Teknologi Bandung
        (ITB). Fokus utama platform ini adalah membantu mahasiswa memahami mata
        kuliah Pancasila dan Pendidikan Kewarganegaraan (KU2071) dengan cara
        yang lebih menarik dan mudah diakses.
      </Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.subHeading}>Fitur Utama:</Text>
        <Text style={styles.featureItem}>- Modul Interaktif</Text>
        <Text style={styles.featureItem}>- Virtual Labs</Text>
        <Text style={styles.featureItem}>- Track Progress Pembelajaran</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#560216",
    padding: 16,
  },
  header: {
    padding: 16,
    backgroundColor: "#f9eedf",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#560216",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f9eedf",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#f9eedf",
    textAlign: "justify",
    marginBottom: 20,
  },
  sectionContainer: {
    backgroundColor: "#f9eedf",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#560216",
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    color: "#560216",
    marginBottom: 8,
  },
});

export default AboutScreen;
