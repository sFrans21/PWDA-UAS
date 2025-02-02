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

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { useRouter } from "expo-router";

// // Impor gambar dari folder assets
// const images = [
//   require("@/assets/images/1.png"),
//   require("@/assets/images/2.png"),
//   require("@/assets/images/3.png"),
//   require("@/assets/images/4.png"),
//   require("@/assets/images/5.png"),
//   require("@/assets/images/6.png"),
// ];

// interface ModuleCardProps {
//   title: string;
//   image: any;
// }

// const ModuleCard: React.FC<ModuleCardProps> = ({ title, image }) => (
//   <View style={styles.moduleCard}>
//     <Image source={image} style={styles.moduleImage} />
//     <Text style={styles.moduleTitle}>{title}</Text>
//     <TouchableOpacity style={styles.button}>
//       <Text style={styles.buttonText}>Lihat Modul</Text>
//     </TouchableOpacity>
//   </View>
// );

// const HomePage = () => {
//   const router = useRouter();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       <TouchableOpacity
//         style={styles.silabusButton}
//         onPress={() => router.push("/silabus")}
//       >
//         <Text style={styles.silabusButtonText}>Lihat Silabus</Text>
//       </TouchableOpacity>

//       <Text style={styles.heading}>Modul Pembelajaran</Text>
//       <View style={styles.moduleContainer}>
//         {images.map((image, index) => (
//           <ModuleCard key={index} title={`Modul ${index + 1}`} image={image} />
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#560216",
//     padding: 16,
//   },
//   header: {
//     padding: 16,
//     backgroundColor: "#f9eedf",
//     alignItems: "center",
//     marginBottom: 16,
//     borderRadius: 8,
//   },
//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#560216",
//   },
//   silabusButton: {
//     backgroundColor: "#f9eedf",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 16,
//     alignItems: "center",
//   },
//   silabusButtonText: {
//     color: "#560216",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#f9eedf",
//     marginBottom: 16,
//   },
//   moduleContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   moduleCard: {
//     backgroundColor: "#f9eedf",
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     width: "48%",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   moduleImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   moduleTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#560216",
//     marginBottom: 8,
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "#560216",
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     width: "100%",
//   },
//   buttonText: {
//     color: "#f9eedf",
//     fontWeight: "600",
//     fontSize: 14,
//   },
// });

// export default HomePage;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { useRouter } from "expo-router";

// // Impor gambar dari folder assets
// const images = [
//   require("@/assets/images/1.png"),
//   require("@/assets/images/2.png"),
//   require("@/assets/images/3.png"),
//   require("@/assets/images/4.png"),
//   require("@/assets/images/5.png"),
//   require("@/assets/images/6.png"),
// ];

// interface ModuleCardProps {
//   title: string;
//   image: any;
//   onPress: () => void;
// }

// const ModuleCard: React.FC<ModuleCardProps> = ({ title, image, onPress }) => (
//   <View style={styles.moduleCard}>
//     <Image source={image} style={styles.moduleImage} />
//     <Text style={styles.moduleTitle}>{title}</Text>
//     <TouchableOpacity style={styles.button} onPress={onPress}>
//       <Text style={styles.buttonText}>Lihat Modul</Text>
//     </TouchableOpacity>
//   </View>
// );

// const HomePage = () => {
//   const router = useRouter();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       <TouchableOpacity
//         style={styles.silabusButton}
//         onPress={() => router.push("/silabus")}
//       >
//         <Text style={styles.silabusButtonText}>Lihat Silabus</Text>
//       </TouchableOpacity>

//       <Text style={styles.heading}>Modul Pembelajaran</Text>
//       <View style={styles.moduleContainer}>
//         {images.map((image, index) => (
//           <ModuleCard
//             key={index}
//             title={`Modul ${index + 1}`}
//             image={image}
//             onPress={() => router.push(`/modul/modul${index + 1}`)}
//           />
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#560216",
//     padding: 16,
//   },
//   header: {
//     padding: 16,
//     backgroundColor: "#f9eedf",
//     alignItems: "center",
//     marginBottom: 16,
//     borderRadius: 8,
//   },
//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#560216",
//   },
//   silabusButton: {
//     backgroundColor: "#f9eedf",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 16,
//     alignItems: "center",
//   },
//   silabusButtonText: {
//     color: "#560216",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#f9eedf",
//     marginBottom: 16,
//   },
//   moduleContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   moduleCard: {
//     backgroundColor: "#f9eedf",
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     width: "48%",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   moduleImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   moduleTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#560216",
//     marginBottom: 8,
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "#560216",
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     width: "100%",
//   },
//   buttonText: {
//     color: "#f9eedf",
//     fontWeight: "600",
//     fontSize: 14,
//   },
// });

// export default HomePage;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { useRouter } from "expo-router";

// const HomePage = () => {
//   const router = useRouter();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       <Text style={styles.heading}>Modul Pembelajaran</Text>
//       <View style={styles.moduleContainer}>
//         <View style={styles.moduleCard}>
//           <Image
//             source={require("@/assets/images/1.png")}
//             style={styles.moduleImage}
//           />
//           <Text style={styles.moduleTitle}>Modul 1</Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => router.push("/modul/modul1")}
//           >
//             <Text style={styles.buttonText}>Lihat Modul</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.moduleCard}>
//           <Image
//             source={require("@/assets/images/2.png")}
//             style={styles.moduleImage}
//           />
//           <Text style={styles.moduleTitle}>Modul 2</Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => router.push("/modul/modul2")}
//           >
//             <Text style={styles.buttonText}>Lihat Modul</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.moduleCard}>
//           <Image
//             source={require("@/assets/images/3.png")}
//             style={styles.moduleImage}
//           />
//           <Text style={styles.moduleTitle}>Modul 3</Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => router.push("/modul/modul3")}
//           >
//             <Text style={styles.buttonText}>Lihat Modul</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.moduleCard}>
//           <Image
//             source={require("@/assets/images/4.png")}
//             style={styles.moduleImage}
//           />
//           <Text style={styles.moduleTitle}>Modul 4</Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => router.push("/modul/modul4")}
//           >
//             <Text style={styles.buttonText}>Lihat Modul</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.moduleCard}>
//           <Image
//             source={require("@/assets/images/5.png")}
//             style={styles.moduleImage}
//           />
//           <Text style={styles.moduleTitle}>Modul 5</Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => router.push("/modul/modul5")}
//           >
//             <Text style={styles.buttonText}>Lihat Modul</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.moduleCard}>
//           <Image
//             source={require("@/assets/images/6.png")}
//             style={styles.moduleImage}
//           />
//           <Text style={styles.moduleTitle}>Modul 6</Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => router.push("/modul/modul6")}
//           >
//             <Text style={styles.buttonText}>Lihat Modul</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Tambahkan Card untuk Modul 3 sampai Modul 6 dengan pola yang sama */}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#560216",
//     padding: 16,
//   },
//   header: {
//     padding: 16,
//     backgroundColor: "#f9eedf",
//     alignItems: "center",
//     marginBottom: 16,
//     borderRadius: 8,
//   },
//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#560216",
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#f9eedf",
//     marginBottom: 16,
//   },
//   moduleContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   moduleCard: {
//     backgroundColor: "#f9eedf",
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 16,
//     width: "48%",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   moduleImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   moduleTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#560216",
//     marginBottom: 8,
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "#560216",
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     width: "100%",
//   },
//   buttonText: {
//     color: "#f9eedf",
//     fontWeight: "600",
//     fontSize: 14,
//   },
// });

// export default HomePage;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const HomePage = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>GarudaVirtue</Text>
      </View>
      <TouchableOpacity
        style={styles.silabusButton}
        onPress={() => router.push("/silabus")}
      >
        <Text style={styles.silabusButtonText}>Lihat Silabus</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Modul Pembelajaran</Text>
      <View style={styles.moduleContainer}>
        <View style={styles.moduleCard}>
          <Image
            source={require("@/assets/images/1.png")}
            style={styles.moduleImage}
          />
          <Text style={styles.moduleTitle}>Modul 1</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/modul/modul1")}
          >
            <Text style={styles.buttonText}>Lihat Modul</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.moduleCard}>
          <Image
            source={require("@/assets/images/2.png")}
            style={styles.moduleImage}
          />
          <Text style={styles.moduleTitle}>Modul 2</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/modul/modul2")}
          >
            <Text style={styles.buttonText}>Lihat Modul</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.moduleCard}>
          <Image
            source={require("@/assets/images/3.png")}
            style={styles.moduleImage}
          />
          <Text style={styles.moduleTitle}>Modul 3</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/modul/modul3")}
          >
            <Text style={styles.buttonText}>Lihat Modul</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.moduleCard}>
          <Image
            source={require("@/assets/images/4.png")}
            style={styles.moduleImage}
          />
          <Text style={styles.moduleTitle}>Modul 4</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/modul/modul4")}
          >
            <Text style={styles.buttonText}>Lihat Modul</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.moduleCard}>
          <Image
            source={require("@/assets/images/5.png")}
            style={styles.moduleImage}
          />
          <Text style={styles.moduleTitle}>Modul 5</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/modul/modul5")}
          >
            <Text style={styles.buttonText}>Lihat Modul</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.moduleCard}>
          <Image
            source={require("@/assets/images/6.png")}
            style={styles.moduleImage}
          />
          <Text style={styles.moduleTitle}>Modul 6</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/modul/modul6")}
          >
            <Text style={styles.buttonText}>Lihat Modul</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Playlist Video */}
      <Text style={styles.heading}>Playlist Video</Text>
      <View style={styles.videoContainer}>
        <View style={styles.videoCard}>
          <Image
            source={require("@/assets/images/12.jpg")} // Thumbnail untuk Video 1
            style={styles.videoThumbnail}
          />
          <Text style={styles.videoTitle}>Video 1</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/videos/vid1")}
          >
            <Text style={styles.buttonText}>Lihat Video</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.videoCard}>
          <Image
            source={require("@/assets/images/13.jpg")} // Thumbnail untuk Video 1
            style={styles.videoThumbnail}
          />
          <Text style={styles.videoTitle}>Video 2</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/videos/vid2")}
          >
            <Text style={styles.buttonText}>Lihat Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.videoCard}>
          <Image
            source={require("@/assets/images/14.jpg")} // Thumbnail untuk Video 2
            style={styles.videoThumbnail}
          />
          <Text style={styles.videoTitle}>Video 3</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/videos/vid3")}
          >
            <Text style={styles.buttonText}>Lihat Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.videoCard}>
          <Image
            source={require("@/assets/images/15.jpg")} // Thumbnail untuk Video 2
            style={styles.videoThumbnail}
          />
          <Text style={styles.videoTitle}>Video 4</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/videos/vid4")}
          >
            <Text style={styles.buttonText}>Lihat Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.videoCard}>
          <Image
            source={require("@/assets/images/16.jpg")} // Thumbnail untuk Video 2
            style={styles.videoThumbnail}
          />
          <Text style={styles.videoTitle}>Video 5</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/videos/vid5")}
          >
            <Text style={styles.buttonText}>Lihat Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.videoCard}>
          <Image
            source={require("@/assets/images/17.jpg")} // Thumbnail untuk Video 2
            style={styles.videoThumbnail}
          />
          <Text style={styles.videoTitle}>Video 6</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/videos/vid6")}
          >
            <Text style={styles.buttonText}>Lihat Video</Text>
          </TouchableOpacity>
        </View>

        {/* Tambahkan Card untuk Video 3 hingga Video 6 */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#560216",
    padding: 16,
  },
  header: {
    padding: 16,
    backgroundColor: "#f9eedf",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#560216",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f9eedf",
    marginBottom: 16,
  },
  moduleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  moduleCard: {
    backgroundColor: "#f9eedf",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  silabusButton: {
    backgroundColor: "#f9eedf",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  silabusButtonText: {
    color: "#560216",
    fontWeight: "bold",
    fontSize: 16,
  },
  moduleImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#560216",
    marginBottom: 8,
    textAlign: "center",
  },
  videoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  videoCard: {
    backgroundColor: "#f9eedf",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  videoThumbnail: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#560216",
    marginBottom: 8,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#560216",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#f9eedf",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default HomePage;
