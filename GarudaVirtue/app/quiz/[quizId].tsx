import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { usePathname } from "expo-router";

const QuizDetail: React.FC = () => {
  const pathname = usePathname();
  const quizId = pathname.split("/").pop(); // Ambil quizId dari URL

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Quiz</Text>
      <Text style={styles.subtitle}>Quiz ID: {quizId}</Text>
      <Text style={styles.description}>
        Ini adalah halaman detail untuk quiz {quizId}.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
  },
});

export default QuizDetail;
