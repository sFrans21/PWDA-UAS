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
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

// Impor gambar dari folder assets
const images = [
  require("@/assets/images/Pancasila dan Kewarganegaraan - KU2071/1.png"),
  require("@/assets/images/Pancasila dan Kewarganegaraan - KU2071/2.png"),
  require("@/assets/images/Pancasila dan Kewarganegaraan - KU2071/3.png"),
  require("@/assets/images/Pancasila dan Kewarganegaraan - KU2071/4.png"),
  require("@/assets/images/Pancasila dan Kewarganegaraan - KU2071/5.png"),
  require("@/assets/images/Pancasila dan Kewarganegaraan - KU2071/6.png"),
];

// Komponen untuk kartu modul
const ModuleCard: React.FC<{ title: string; image: any }> = ({
  title,
  image,
}) => {
  return (
    <View style={styles.moduleCard}>
      <Image source={image} style={styles.moduleImage} />
      <View style={styles.textContainer}>
        <Text style={styles.moduleTitle}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lihat Modul</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomePage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>GarudaVirtue</Text>
      </View>

      {/* Opsi Singkat */}
      <View style={styles.section}>
        <Text style={styles.heading}>Opsi Singkat</Text>
        <View style={styles.rowContainer}>
          {/* Statistik */}
          <View style={styles.box}>
            <Text style={styles.title}>Statistik</Text>
            <Text style={styles.text}>
              Jumlah Like: <Text style={styles.highlight}>25</Text>
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Likes</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              Jumlah Komentar: <Text style={styles.highlight}>12</Text>
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Comments</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              Playlist yang Disimpan: <Text style={styles.highlight}>4</Text>
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Lihat Modul</Text>
            </TouchableOpacity>
          </View>

          {/* Topik */}
          <View style={styles.box}>
            <Text style={styles.title}>Topik</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Pancasila sebagai ideologi negara</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Hak dan Kewajiban Warga Negara</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Negara Hukum dan Demokrasi</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Kedaulatan Rakyat</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Konstitusi dan UUD 1945</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>
                Bela Negara dan Pertahanan Nasional
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Globalisasi dan Nasionalisme</Text>
            </TouchableOpacity>
          </View>

          {/* Silabus */}
          <View style={styles.box}>
            <Text style={styles.title}>Silabus</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Lihat Silabus</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modul */}
      <View style={styles.section}>
        <Text style={styles.heading}>Modul</Text>
        <View style={styles.moduleContainer}>
          {images.map((image, index) => (
            <ModuleCard
              key={index}
              title={`Modul ${index + 1}`}
              image={image}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.fullButton}>
          <Text style={styles.buttonText}>Lihat Semua Modul</Text>
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: "30%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
    color: "#C05621",
    fontWeight: "bold",
  },
  link: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#C05621",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  moduleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  moduleCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: "48%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  moduleImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  textContainer: {
    paddingHorizontal: 8,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  fullButton: {
    backgroundColor: "#333",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default HomePage;
