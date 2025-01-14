// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from "react-native";

// const HomePage = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//         <View style={styles.icons}>
//           <Text style={styles.icon}>☰</Text>
//           <Text style={styles.icon}>🔍</Text>
//           <Text style={styles.icon}>👤</Text>
//           <Text style={styles.icon}>⚙️</Text>
//         </View>
//       </View>

//       {/* Opsi Singkat */}
//       <Text style={styles.heading}>Opsi Singkat</Text>
//       <View style={styles.boxContainer}>
//         {/* Statistik Section */}
//         <View style={styles.box}>
//           <Text style={styles.title}>Statistik</Text>
//           <Text style={styles.text}>
//             jumlah like: <Text style={styles.highlight}>25</Text>
//           </Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>View Likes</Text>
//           </TouchableOpacity>
//           <Text style={styles.text}>
//             jumlah komentar: <Text style={styles.highlight}>12</Text>
//           </Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>View Comments</Text>
//           </TouchableOpacity>
//           <Text style={styles.text}>
//             playlist yang disimpan: <Text style={styles.highlight}>4</Text>
//           </Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Lihat Moduls</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Topik Section */}
//         <View style={styles.box}>
//           <Text style={styles.title}>Topik</Text>
//           <TouchableOpacity style={styles.topicButton}>
//             <Text style={styles.topicText}>
//               Pancasila sebagai ideologi negara
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.topicButton}>
//             <Text style={styles.topicText}>Hak dan Kewajiban Warga Negara</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.topicButton}>
//             <Text style={styles.topicText}>Negara Hukum dan Demokrasi</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#fff",
//     elevation: 3, // Shadow untuk Android
//     shadowColor: "#000", // Shadow untuk iOS
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     fontFamily: "Amarante", // Pastikan font-family tersedia
//     color: "#333",
//   },
//   icons: {
//     flexDirection: "row",
//   },
//   icon: {
//     marginHorizontal: 8,
//     fontSize: 20,
//     color: "#555",
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 16,
//     marginLeft: 16,
//     color: "#333",
//   },
//   boxContainer: {
//     paddingHorizontal: 16,
//   },
//   box: {
//     backgroundColor: "#fff",
//     padding: 16,
//     marginBottom: 16,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 8,
//   },
//   text: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 8,
//   },
//   highlight: {
//     color: "#C05621", // Warna oranye
//     fontWeight: "bold",
//   },
//   button: {
//     backgroundColor: "#C05621", // Warna oranye
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     marginBottom: 8,
//   },
//   buttonText: {
//     color: "#fff",
//     textAlign: "center",
//     fontSize: 14,
//   },
//   topicButton: {
//     backgroundColor: "#f0f0f0",
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     marginBottom: 8,
//   },
//   topicText: {
//     fontSize: 14,
//     color: "#333",
//   },
// });

// export default HomePage;

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>GarudaVirtue</Text>
        <View style={styles.icons}>
          <Text style={styles.icon}>☰</Text>
          <Text style={styles.icon}>🔍</Text>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.icon}>🌞</Text>
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profile}>
        <Image
          source={require("@/assets/images/pic-1.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Nama Pengguna</Text>
        <Text style={styles.profileDetails}>STEI - 19624567</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/* Box Container */}
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.boxContent}>
            <Text style={styles.boxIcon}>🔖</Text>
            <View>
              <Text style={styles.boxValue}>4</Text>
              <Text style={styles.boxLabel}>Playlist</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.boxContent}>
            <Text style={styles.boxIcon}>❤️</Text>
            <View>
              <Text style={styles.boxValue}>33</Text>
              <Text style={styles.boxLabel}>Video Disukai</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
    elevation: 3,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
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
  profile: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileDetails: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  boxContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
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
  boxContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  boxValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boxLabel: {
    fontSize: 14,
    color: "#666",
  },
});

export default ProfileScreen;
