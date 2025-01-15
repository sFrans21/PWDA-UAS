// import React from "react";
// import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";

// const PlaylistCard: React.FC<{ title: string; imageUrl: string; labId: number }> = ({
//   title,
//   imageUrl,
//   labId,
// }) => {
//   const router = useRouter();

//   return (
//     <TouchableOpacity
//       style={styles.playlistCard}
//       onPress={() => router.push(`/lab/${labId}`)} // Navigasi ke halaman detail
//     >
//       <Image source={{ uri: imageUrl }} style={styles.playlistImage} />
//       <Text style={styles.playlistTitle}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const LabScreen: React.FC = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.heading}>Virtual Labs</Text>
//         <View style={styles.virtualLabContainer}>
//           <Image
//             source={{
//               uri: "https://via.placeholder.com/300x200?text=GarudaVirtue+Labs",
//             }}
//             style={styles.virtualLabImage}
//           />
//           <View style={styles.virtualLabDetails}>
//             <Text style={styles.labTitle}>Pengenalan Singkat</Text>
//             <Text style={styles.labDescription}>
//               Virtual Labs merupakan salah satu fitur pembelajaran utama di
//               website GarudaVirtue. Dalam labs ini, kamu akan dipersiapkan dengan berbagai
//               materi dari modul terkait, sehingga kamu dapat menguji pengetahuan melalui
//               kuis interaktif yang menarik.
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.heading}>Playlist Videos</Text>
//         <View style={styles.gridContainer}>
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
//             <PlaylistCard
//               key={item}
//               title={`Lab 0${item}`}
//               imageUrl={`https://via.placeholder.com/150?text=Lab+0${item}`}
//               labId={item} // Kirimkan ID lab
//             />
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#eee",
//     padding: 16,
//   },
//   header: {
//     padding: 16,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     marginBottom: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   section: {
//     marginBottom: 24,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: "#333",
//   },
//   virtualLabContainer: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   virtualLabImage: {
//     width: "40%",
//     height: 120,
//     borderRadius: 8,
//     marginRight: 16,
//   },
//   virtualLabDetails: {
//     flex: 1,
//   },
//   labTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//     color: "#333",
//   },
//   labDescription: {
//     fontSize: 16,
//     color: "#555",
//     lineHeight: 24,
//   },
//   gridContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   playlistCard: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     width: "30%",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   playlistImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   playlistTitle: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
// });

// export default LabScreen;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { useRouter } from "expo-router";

// // Gambar lokal untuk kartu lab
// const images = [
//   require("@/assets/images/12.jpg"),
//   require("@/assets/images/13.jpg"),
//   require("@/assets/images/14.jpg"),
//   require("@/assets/images/15.jpg"),
//   require("@/assets/images/16.jpg"),
//   require("@/assets/images/17.jpg"),
//   require("@/assets/images/18.jpg"),
//   require("@/assets/images/19.jpg"),
//   require("@/assets/images/20.jpg"),
// ];

// const PlaylistCard: React.FC<{ title: string; image: any; labId: number }> = ({
//   title,
//   image,
//   labId,
// }) => {
//   const router = useRouter();

//   return (
//     <TouchableOpacity
//       style={styles.playlistCard}
//       onPress={() =>
//         router.push({
//           pathname: "/lab/[labId]",
//           params: { labId: labId.toString() },
//         })
//       }
//     >
//       <Image source={image} style={styles.playlistImage} />
//       <Text style={styles.playlistTitle}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const LabScreen: React.FC = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.heading}>Virtual Labs</Text>
//         <View style={styles.virtualLabContainer}>
//           <Image
//             source={require("@/assets/images/gambar lab main.jpg")}
//             style={styles.virtualLabImage}
//           />
//           <View style={styles.virtualLabDetails}>
//             <Text style={styles.labTitle}>Pengenalan Singkat</Text>
//             <Text style={styles.labDescription}>
//               Virtual Labs merupakan salah satu fitur pembelajaran utama di
//               website GarudaVirtue. Dalam labs ini, kamu akan dipersiapkan
//               dengan berbagai materi dari modul terkait, sehingga kamu dapat
//               menguji pengetahuan melalui kuis interaktif yang menarik.
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.heading}>Playlist Videos</Text>
//         <View style={styles.gridContainer}>
//           {images.map((image, index) => (
//             <PlaylistCard
//               key={index}
//               title={`Lab ${index + 1}`}
//               image={image}
//               labId={index + 1}
//             />
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#f8f8f8",
//     padding: 16,
//   },
//   header: {
//     padding: 16,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     marginBottom: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   section: {
//     marginBottom: 24,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: "#333",
//   },
//   virtualLabContainer: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   virtualLabImage: {
//     width: "40%",
//     height: 120,
//     borderRadius: 8,
//     marginRight: 16,
//   },
//   virtualLabDetails: {
//     flex: 1,
//   },
//   labTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//     color: "#333",
//   },
//   labDescription: {
//     fontSize: 16,
//     color: "#555",
//     lineHeight: 24,
//   },
//   gridContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   playlistCard: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     width: "30%",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   playlistImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   playlistTitle: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
// });

// export default LabScreen;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const LabScreen: React.FC = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>GarudaVirtue</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Virtual Labs</Text>
        <View style={styles.virtualLabContainer}>
          <Image
            source={require("@/assets/images/gambarLab.jpg")}
            style={styles.virtualLabImage}
          />
          <View style={styles.virtualLabDetails}>
            <Text style={styles.labTitle}>Pengenalan Singkat</Text>
            <Text style={styles.labDescription}>
              Virtual Labs adalah salah satu fitur pembelajaran utama di
              GarudaVirtue. Dalam labs ini, Anda akan mempelajari berbagai
              materi dari modul terkait, serta menguji pemahaman Anda melalui
              kuis interaktif.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Playlist Video</Text>
        <TouchableOpacity
          style={styles.playlistCard}
          onPress={() => router.push("/lab")}
        >
          <Image
            source={require("@/assets/images/gambarLab.jpg")}
            style={styles.playlistImage}
          />
          <Text style={styles.playlistTitle}>Playlist Lab</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  header: {
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  virtualLabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  virtualLabImage: {
    width: "40%",
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  virtualLabDetails: {
    flex: 1,
  },
  labTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  labDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  playlistCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  playlistImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default LabScreen;
