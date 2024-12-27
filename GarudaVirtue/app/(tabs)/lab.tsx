import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const LabPage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>GarudaVirtue</Text>
        <View style={styles.icons}>
          <Text style={styles.icon}>☰</Text>
          <Text style={styles.icon}>🔍</Text>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.icon}>⚙️</Text>
        </View>
      </View>

      {/* Virtual Labs Section */}
      <Text style={styles.sectionHeading}>Virtual Labs</Text>
      <View style={styles.virtualLabs}>
        <View style={styles.labImageContainer}>
          <Text style={styles.labImageText}>9 videos</Text>
        </View>
        <View style={styles.labDetails}>
          <Text style={styles.labTitle}>Pengenalan Singkat</Text>
          <Text style={styles.labDescription}>
            Virtual Labs merupakan salah satu fitur pembelajaran utama di
            website GarudaVirtue. Dalam labs ini, kamu akan dipersiapkan dengan
            berbagai materi dari modul terkait, sehingga kamu dapat menguji
            pengetahuan melalui kuis interaktif yang menarik.
          </Text>
        </View>
      </View>

      {/* Playlist Videos Section */}
      <Text style={styles.sectionHeading}>Playlist Videos</Text>
      <View style={styles.playlistContainer}>
        {Array.from({ length: 9 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.playlistBox}
            onPress={() => console.log(`Navigate to Lab ${index + 1}`)}
          >
            <Text style={styles.playlistTitle}>Lab {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Amarante", // Pastikan font ini diinstal
    color: "#333",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 8,
    fontSize: 20,
    color: "#555",
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 16,
    color: "#333",
  },
  virtualLabs: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  labImageContainer: {
    flex: 1,
    marginRight: 16,
  },
  labImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  labImageText: {
    position: "absolute",
    bottom: 8,
    left: 8,
    color: "#fff",
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
  },
  labDetails: {
    flex: 2,
  },
  labTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  labDescription: {
    fontSize: 14,
    color: "#555",
  },
  playlistContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  playlistBox: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  playlistImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 8,
  },
});

export default LabPage;
