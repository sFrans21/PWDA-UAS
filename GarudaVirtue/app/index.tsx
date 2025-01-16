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
import { getFirestore } from "firebase/firestore";

const firestore = getFirestore();
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; // Import Firestore

import { router } from "expo-router";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Untuk nama
  const [nim, setNim] = useState(""); // Untuk NIM
  const [isSignUp, setIsSignUp] = useState(false); // Mode Sign Up atau Sign In

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Simpan nama dan NIM di database jika diperlukan
      const { user } = userCredential;

      // Simpan nama dan NIM di Firestore
      await setDoc(doc(firestore, "users", user.uid), {
        name: name, // Nama pengguna
        nim: nim, // NIM pengguna
        email: email, // Email pengguna
        createdAt: new Date(), // Timestamp
      });

      console.log("User signed up:", { uid: user.uid, name, nim });

      // Tampilkan pesan konfirmasi
      alert("Sign Up successful! Please login to continue.");

      // Arahkan pengguna kembali ke halaman Login
      router.replace("/");
    } catch (error: any) {
      console.error("Sign Up failed:", error.message);
      alert("Sign Up failed: " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GarudaVirtue</Text>
      <Text style={styles.subtitle}>
        {isSignUp ? "Create an Account" : "Sign In to Continue"}
      </Text>

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

      {/* Input Nama dan NIM hanya untuk Sign Up */}
      {isSignUp && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nama"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="NIM"
            placeholderTextColor="#999"
            value={nim}
            onChangeText={setNim}
            keyboardType="numeric"
          />
        </>
      )}

      {/* Tombol Login atau Sign Up */}
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={isSignUp ? signUp : signIn}
      >
        <Text style={styles.buttonText}>{isSignUp ? "Sign Up" : "Login"}</Text>
      </TouchableOpacity>

      {/* Tombol untuk Ganti Mode */}
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => setIsSignUp(!isSignUp)}
      >
        <Text style={styles.buttonTextSecondary}>
          {isSignUp ? "Already have an account? Login" : "Create an Account"}
        </Text>
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
