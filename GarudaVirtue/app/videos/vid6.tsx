import React from "react";
import { StyleSheet, View, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Vid1Screen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>GarudaVirtue - Video 6</Text>
      </View>

      {/* Player Wrapper */}
      <View style={styles.playerWrapper}>
        <YoutubePlayer height={300} play={true} videoId={"HckLx1fgSy0"} />
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Tentang Video</Text>
        <Text style={styles.descriptionText}>
          Video ini membahas tentang topik penting dalam Pancasila dan
          Kewarganegaraan. Pastikan Anda memperhatikan detailnya untuk pemahaman
          yang lebih baik.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#560216",
  },
  header: {
    backgroundColor: "#f9eedf",
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#560216",
  },
  playerWrapper: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#000",
    marginVertical: 16,
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#560216",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    textAlign: "justify",
  },
});

export default Vid1Screen;
