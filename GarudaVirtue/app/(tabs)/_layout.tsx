import { Tabs } from "expo-router";
// import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Icon from "react-native-vector-icons/FontAwesome";

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const HomePage = () => {
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

      {/* Opsi Singkat */}
      <Text style={styles.heading}>Opsi Singkat</Text>
      <View style={styles.boxContainer}>
        {/* Statistik Section */}
        <View style={styles.box}>
          <Text style={styles.title}>Statistik</Text>
          <Text style={styles.text}>
            jumlah like: <Text style={styles.highlight}>25</Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Likes</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            jumlah komentar: <Text style={styles.highlight}>12</Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Comments</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            playlist yang disimpan: <Text style={styles.highlight}>4</Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Lihat Moduls</Text>
          </TouchableOpacity>
        </View>

        {/* Topik Section */}
        <View style={styles.box}>
          <Text style={styles.title}>Topik</Text>
          <TouchableOpacity style={styles.topicButton}>
            <Text style={styles.topicText}>
              Pancasila sebagai ideologi negara
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topicButton}>
            <Text style={styles.topicText}>Hak dan Kewajiban Warga Negara</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topicButton}>
            <Text style={styles.topicText}>Negara Hukum dan Demokrasi</Text>
          </TouchableOpacity>
        </View>
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
    elevation: 3, // Shadow untuk Android
    shadowColor: "#000", // Shadow untuk iOS
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Amarante", // Pastikan font-family tersedia
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
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
    marginLeft: 16,
    color: "#333",
  },
  boxContainer: {
    paddingHorizontal: 16,
  },
  box: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  highlight: {
    color: "#C05621", // Warna oranye
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#C05621", // Warna oranye
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginBottom: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },
  topicButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginBottom: 8,
  },
  topicText: {
    fontSize: 14,
    color: "#333",
  },
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <Icon name="question-circle" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="page"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lab"
        options={{
          title: "Lab",
          tabBarIcon: ({ color }) => (
            <Icon name="flask" size={28} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: "Modules",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      /> */}

      {/* <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      /> */}

      <Tabs.Screen
        name="index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon name="user-circle" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
