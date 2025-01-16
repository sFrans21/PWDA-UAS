import React from "react";
import { StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  return (
    <View style={styles.container}>
      <YoutubePlayer height={300} play={true} videoId={"CqCTQWJbhDY"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
