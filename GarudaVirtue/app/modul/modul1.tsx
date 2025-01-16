import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const Modul1Screen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://docs.google.com/presentation/d/1yInh35jkCmiURMcA-9HZPdEFuwGx3Pqi/edit#slide=id.p1",
        }} // Ganti dengan link modul 1
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#560216",
  },
  webview: {
    flex: 1,
  },
});

export default Modul1Screen;
