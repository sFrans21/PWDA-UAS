// import { StyleSheet, TouchableOpacity } from "react-native";
// import { auth } from "../../FirebaseConfig";
// // import { router } from "expo-router";
// // import { getAuth } from "firebase/auth";

// import EditScreenInfo from "@/components/EditScreenInfo";
// import { Text, View } from "../../components/Themed";
// import { router } from "expo-router";

// import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
// import { auth } from "../../FirebaseConfig";
// import { router } from "expo-router";
// import { getAuth } from "firebase/auth";

// export default function TabOneScreen() {
//   getAuth().onAuthStateChanged((user) => {
//     if (!user) router.replace("/");
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Out</Text>
//       <TouchableOpacity style={styles.button} onPress={() => auth.signOut()}>
//         <Text style={styles.text}>Sign Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FAFAFA", // A softer white for a modern, minimalist background
//   },
//   title: {
//     fontSize: 28, // A bit larger for a more striking appearance
//     fontWeight: "800", // Extra bold for emphasis
//     color: "#1A237E", // A deep indigo for a sophisticated, modern look
//     marginBottom: 40, // Increased space for a more airy, open feel
//   },
//   separator: {
//     marginVertical: 30,
//     height: 2, // Slightly thicker for a more pronounced separation
//     width: "80%",
//     backgroundColor: "#E8EAF6", // Using a light indigo to match the border of the textInput
//   },
//   button: {
//     width: "90%",
//     backgroundColor: "#5C6BC0", // A lighter indigo to complement the title color
//     padding: 20,
//     borderRadius: 15, // Softly rounded corners for a modern, friendly touch
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#5C6BC0", // Shadow color to match the button for a cohesive look
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.4,
//     shadowRadius: 5,
//     elevation: 5, // Slightly elevated for a subtle 3D effect
//     marginTop: 15, // Adjusted to match the new style
//   },
//   text: {
//     color: "#FFFFFF", // Maintained white for clear visibility
//     fontSize: 18, // Slightly larger for emphasis
//     fontWeight: "600", // Semi-bold for a balanced weight
//   },
// });

// import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
// import { auth } from "../../FirebaseConfig";
// import { router } from "expo-router";
// import { getAuth } from "firebase/auth";

// export default function TabOneScreen() {
//   const handleSignOut = async () => {
//     try {
//       await auth.signOut();
//       router.replace("/");
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error("Error signing out:", error.message);
//         alert("Sign-out failed: " + (error as Error).message);
//       } else {
//         console.error("Error signing out:", error);
//         alert("Sign-out failed");
//       }
//       alert("Sign-out failed: " + (error as Error).message);
//     }
//   };

//   getAuth().onAuthStateChanged((user) => {
//     if (!user) router.replace("/");
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>You're Logged In</Text>
//       <TouchableOpacity style={styles.button} onPress={handleSignOut}>
//         <Text style={styles.buttonText}>Sign Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#560216", // Warna utama dari logo
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "800",
//     color: "#f9eedf", // Warna logo
//     marginBottom: 40,
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "#f9eedf", // Warna logo
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   buttonText: {
//     color: "#560216", // Warna latar belakang dari logo
//     fontWeight: "600",
//     fontSize: 16,
//   },
// });

// import React from "react";
// import {
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   View,
//   Image,
//   ScrollView,
// } from "react-native";
// import { auth } from "../../FirebaseConfig";
// import { router } from "expo-router";
// import { getAuth } from "firebase/auth";

// export default function MergedScreen() {
//   const handleSignOut = async () => {
//     try {
//       await auth.signOut();
//       router.replace("/");
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error("Error signing out:", error.message);
//         alert("Sign-out failed: " + error.message);
//       } else {
//         console.error("Error signing out:", error);
//         alert("Sign-out failed");
//       }
//     }
//   };

//   getAuth().onAuthStateChanged((user) => {
//     if (!user) router.replace("/");
//   });

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.logo}>GarudaVirtue</Text>
//       </View>

//       {/* Profile Section */}
//       <View style={styles.profileSection}>
//         <Image
//           source={require("@/assets/images/pic-1.jpg")}
//           style={styles.profileImage}
//         />
//         <Text style={styles.profileName}>Nama Pengguna</Text>
//         <Text style={styles.profileDetails}>NIM</Text>
//       </View>

//       {/* Sign Out Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleSignOut}>
//           <Text style={styles.buttonText}>Sign Out</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

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
//   profileSection: {
//     alignItems: "center",
//     marginBottom: 24,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#f9eedf",
//     marginBottom: 5,
//   },
//   profileDetails: {
//     fontSize: 16,
//     color: "#f9eedf",
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     alignItems: "center",
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: "#f9eedf",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   buttonText: {
//     color: "#560216",
//     fontWeight: "600",
//     fontSize: 16,
//   },
// });

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { auth, firestore } from "../../FirebaseConfig";
import { router } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function MergedScreen() {
  const [userData, setUserData] = useState<any>(null); // State untuk menyimpan data pengguna

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.replace("/");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error signing out:", error.message);
        alert("Sign-out failed: " + error.message);
      } else {
        console.error("Error signing out:", error);
        alert("Sign-out failed");
      }
    }
  };

  // Fungsi untuk mengambil data pengguna dari Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser; // Ambil pengguna yang sedang login
        if (user) {
          const docRef = doc(firestore, "users", user.uid); // Referensi ke dokumen pengguna
          const docSnap = await getDoc(docRef); // Ambil data dari Firestore

          if (docSnap.exists()) {
            setUserData(docSnap.data()); // Simpan data pengguna ke state
          } else {
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Redirect ke halaman login jika pengguna tidak ada
  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace("/");
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>GarudaVirtue</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require("@/assets/images/pic-1.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {userData ? userData.name : "Loading..."}
        </Text>
        <Text style={styles.profileDetails}>
          {userData ? userData.nim : "Loading..."}
        </Text>
      </View>

      {/* Sign Out Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
  profileSection: {
    alignItems: "center",
    marginBottom: 24,
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
    color: "#f9eedf",
    marginBottom: 5,
  },
  profileDetails: {
    fontSize: 16,
    color: "#f9eedf",
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#f9eedf",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#560216",
    fontWeight: "600",
    fontSize: 16,
  },
});
