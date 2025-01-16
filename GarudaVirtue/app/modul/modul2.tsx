import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const Modul1Screen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://docs.google.com/presentation/d/1CfuDtH8gdHlm-Qpq3FTJs4e8Hdhmmiwu/edit?usp=drive_link&ouid=112312702678642473365&rtpof=true&sd=true",
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
