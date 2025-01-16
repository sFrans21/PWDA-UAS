import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "@/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { router } from "expo-router";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)");
    } catch (error: any) {
      console.log(error);
      alert("sign In failed: " + error.message);
    }
  };
  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace("/(tabs)");
    } catch (error: any) {
      console.log(error);
      alert("sign In failed: " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GarudaVirtue</Text>
      <Text style={styles.subtitle}>Sign in or create an account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={signIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary} onPress={signUp}>
        <Text style={styles.buttonTextSecondary}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#560216", // Warna latar belakang dari logo
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#f9eedf", // Warna logo
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#f9eedf", // Warna logo
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#4b0113", // Warna lebih gelap dari latar belakang untuk input
    borderColor: "#f9eedf", // Warna logo untuk border
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "#f9eedf", // Warna teks
  },
  buttonPrimary: {
    backgroundColor: "#f9eedf", // Warna logo untuk tombol utama
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonSecondary: {
    borderColor: "#f9eedf", // Warna logo untuk border tombol
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#560216", // Warna latar belakang untuk teks tombol utama
    fontWeight: "600",
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: "#f9eedf", // Warna logo untuk teks tombol sekunder
    fontWeight: "600",
    fontSize: 16,
  },
});

export default index;
