// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from "react-native";
// import { useRouter, usePathname } from "expo-router";
// const LabDetail = () => {
//   const { labId } = useSearchParams();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       {/* Video Section */}
//       <View style={styles.videoSection}>
//         <View style={styles.videoPlaceholder}>
//           <Text style={styles.videoText}>Video 1 - Modul {labId}</Text>
//         </View>
//         <View style={styles.videoPlaceholder}>
//           <Text style={styles.videoText}>Video 2 - Modul {labId}</Text>
//         </View>
//       </View>

//       {/* Detail Section */}
//       <View style={styles.detailSection}>
//         <Text style={styles.title}>
//           Modul {labId} - Dinamika Kehidupan Berbangsa dan Bernegara
//         </Text>
//         <Text style={styles.date}>24-10-2024</Text>
//       </View>

//       {/* Action Section */}
//       <View style={styles.actionSection}>
//         <TouchableOpacity style={styles.quizButton}>
//           <Text style={styles.buttonText}>Mulai Quiz</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.moduleButton}>
//           <Text style={styles.buttonText}>Lihat Modul</Text>
//         </TouchableOpacity>
//         <Text style={styles.likeCount}>Jumlah Like: 0</Text>
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
//   videoSection: {
//     marginBottom: 16,
//   },
//   videoPlaceholder: {
//     width: "100%",
//     height: 200,
//     backgroundColor: "#333",
//     borderRadius: 8,
//     marginBottom: 16,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   videoText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   detailSection: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 8,
//   },
//   date: {
//     fontSize: 14,
//     color: "#555",
//   },
//   actionSection: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   quizButton: {
//     backgroundColor: "#C05621",
//     padding: 12,
//     borderRadius: 5,
//     flex: 1,
//     marginRight: 8,
//     alignItems: "center",
//   },
//   moduleButton: {
//     backgroundColor: "#333",
//     padding: 12,
//     borderRadius: 5,
//     flex: 1,
//     marginLeft: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   likeCount: {
//     marginTop: 8,
//     fontSize: 14,
//     color: "#555",
//     textAlign: "center",
//   },
// });

// export default LabDetail;

// import React from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { usePathname } from "expo-router";

// const LabDetail: React.FC = () => {
//   const pathname = usePathname(); // Mendapatkan URL path
//   const labId = pathname.split("/").pop(); // Mengambil labId dari path

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       <View style={styles.detailSection}>
//         <Text style={styles.title}>
//           Modul {labId} - Dinamika Kehidupan Berbangsa dan Bernegara
//         </Text>
//         <Text style={styles.description}>
//           Detail konten untuk modul {labId} akan ditampilkan di sini.
//         </Text>
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
//   detailSection: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 16,
//     color: "#555",
//     lineHeight: 24,
//   },
// });

// export default LabDetail;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import Video from "react-native-video";
// import { usePathname } from "expo-router";

// const LabDetail: React.FC = () => {
//   const pathname = usePathname();
//   const labId = pathname.split("/").pop(); // Ambil labId dari URL

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       {/* Video Section */}
//       <View style={styles.videoSection}>
//         <Video
//           source={{ uri: "https://example.com/video1.mp4" }} // URL video asli
//           style={styles.video}
//           controls
//           resizeMode="contain"
//         />
//         <Text style={styles.videoText}>Video 1 - Modul {labId}</Text>

//         <Video
//           source={{ uri: "https://example.com/video2.mp4" }} // URL video asli
//           style={styles.video}
//           controls
//           resizeMode="contain"
//         />
//         <Text style={styles.videoText}>Video 2 - Modul {labId}</Text>
//       </View>

//       {/* Detail Section */}
//       <View style={styles.detailSection}>
//         <Text style={styles.title}>
//           Modul {labId} - Dinamika Kehidupan Berbangsa dan Bernegara
//         </Text>
//         <Text style={styles.date}>24-10-2024</Text>
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
//   videoSection: {
//     marginBottom: 16,
//   },
//   video: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     backgroundColor: "#000",
//   },
//   videoText: {
//     marginTop: 8,
//     fontSize: 14,
//     color: "#555",
//     textAlign: "center",
//   },
//   detailSection: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
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
//   date: {
//     fontSize: 14,
//     color: "#555",
//   },
// });

// export default LabDetail;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import Video from "react-native-video";
// import { useRouter, usePathname } from "expo-router";

// const LabDetail: React.FC = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const labId = pathname.split("/").pop(); // Ambil labId dari URL

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       {/* Video Section */}
//       <View style={styles.videoSection}>
//         <Video
//           source={{ uri: "@/assets/videos/vid1.mp4" }}
//           style={styles.video}
//           controls
//           resizeMode="contain"
//           onError={(e) => console.error("Video Error: ", e)}
//         />
//         <Text style={styles.videoText}>Video 1 - Modul {labId}</Text>

//         <Video
//           source={{ uri: "https://example.com/video2.mp4" }}
//           style={styles.video}
//           controls
//           resizeMode="contain"
//           onError={(e) => console.error("Video Error: ", e)}
//         />
//         <Text style={styles.videoText}>Video 2 - Modul {labId}</Text>
//       </View>

//       {/* Detail Section */}
//       <View style={styles.detailSection}>
//         <Text style={styles.title}>
//           Modul {labId} - Dinamika Kehidupan Berbangsa dan Bernegara
//         </Text>
//         <Text style={styles.date}>24-10-2024</Text>
//       </View>

//       {/* Action Section */}
//       <View style={styles.actionSection}>
//         <TouchableOpacity
//           style={styles.quizButton}
//           onPress={() =>
//             router.push({
//               pathname: "/quiz/[quizId]",
//               params: { quizId: labId ?? "" },
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Mulai Quiz</Text>
//         </TouchableOpacity>

//         {/* <TouchableOpacity
//           style={styles.moduleButton}
//           onPress={() =>
//             router.push({
//               pathname: "/modul/[modulId]",
//               params: { modulId: labId },
//             })
//           }
//         >
//           <Text style={styles.buttonText}>Lihat Modul</Text>
//         </TouchableOpacity> */}
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
//   videoSection: {
//     marginBottom: 16,
//   },
//   video: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     backgroundColor: "#000",
//   },
//   videoText: {
//     marginTop: 8,
//     fontSize: 14,
//     color: "#555",
//     textAlign: "center",
//   },
//   detailSection: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
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
//   date: {
//     fontSize: 14,
//     color: "#555",
//   },
//   actionSection: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   quizButton: {
//     backgroundColor: "#C05621",
//     padding: 12,
//     borderRadius: 5,
//     flex: 1,
//     marginRight: 8,
//     alignItems: "center",
//   },
//   moduleButton: {
//     backgroundColor: "#333",
//     padding: 12,
//     borderRadius: 5,
//     flex: 1,
//     marginLeft: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
// });

// export default LabDetail;

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Video from "react-native-video";

const LabDetail: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>GarudaVirtue</Text>
      </View>

      <View style={styles.videoSection}>
        <Video
          source={require("@/assets/videos/vid1.mp4")}
          style={styles.video}
          controls
          resizeMode="contain"
          onError={(e) => console.error("Video Error: ", e)}
        />
        <Text style={styles.videoText}>Video Modul 1</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.title}>
          Modul 1 - Dinamika Kehidupan Berbangsa dan Bernegara
        </Text>
        <Text style={styles.date}>24-10-2024</Text>
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
  videoSection: {
    marginBottom: 16,
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    backgroundColor: "#000",
  },
  videoText: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  detailSection: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
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
  date: {
    fontSize: 14,
    color: "#555",
  },
});

export default LabDetail;
