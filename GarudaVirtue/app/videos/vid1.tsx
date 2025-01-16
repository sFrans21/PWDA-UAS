import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { firestore, auth } from "@/FirebaseConfig";

const Vid1Screen = () => {
  const [isLiked, setIsLiked] = useState(false); // Status apakah tombol sudah di-like
  const [totalLikes, setTotalLikes] = useState(0); // Jumlah total like

  const toggleLike = () => {
    if (isLiked) {
      setTotalLikes(totalLikes - 1); // Kurangi jumlah like
    } else {
      setTotalLikes(totalLikes + 1); // Tambahkan jumlah like
    }
    setIsLiked(!isLiked); // Ubah status tombol like
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>GarudaVirtue - Video 1</Text>
      </View>

      {/* Player Wrapper */}
      <View style={styles.playerWrapper}>
        <YoutubePlayer height={300} play={true} videoId={"xpGJfE-Hg44"} />
      </View>

      {/* Like Button */}
      <View style={styles.likeContainer}>
        <TouchableOpacity
          style={[styles.likeButton, isLiked && styles.liked]}
          onPress={toggleLike}
        >
          <Text style={styles.likeButtonText}>
            {isLiked ? "Liked" : "Like"} ({totalLikes})
          </Text>
        </TouchableOpacity>
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
  likeContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  likeButton: {
    backgroundColor: "#f9eedf",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  liked: {
    backgroundColor: "#4CAF50", // Hijau untuk status liked
  },
  likeButtonText: {
    color: "#560216",
    fontWeight: "600",
    fontSize: 16,
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

// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";
// import {
//   doc,
//   getDoc,
//   updateDoc,
//   arrayUnion,
//   arrayRemove,
// } from "firebase/firestore";
// import { firestore, auth } from "@/FirebaseConfig";

// const Vid1Screen = () => {
//   const videoId = "vid1"; // ID unik untuk video ini
//   const [isLiked, setIsLiked] = useState(false); // Status apakah user sudah like
//   const [totalLikes, setTotalLikes] = useState(0); // Total likes dari Firestore

//   // Fetch status like dan total likes saat komponen dimuat
//   useEffect(() => {
//     const fetchLikeData = async () => {
//       try {
//         const videoDoc = doc(firestore, "videos", videoId);
//         const userDoc = doc(firestore, "users", auth.currentUser?.uid || "");

//         const videoSnap = await getDoc(videoDoc);
//         const userSnap = await getDoc(userDoc);

//         if (videoSnap.exists()) {
//           setTotalLikes(videoSnap.data().likes || 0);
//         }
//         if (userSnap.exists()) {
//           const likedVideos = userSnap.data().likedVideos || [];
//           setIsLiked(likedVideos.includes(videoId));
//         }
//       } catch (error) {
//         console.error("Error fetching like data:", error);
//       }
//     };

//     fetchLikeData();
//   }, []);

//   // Fungsi untuk menghandle like/unlike
//   const toggleLike = async () => {
//     const user = auth.currentUser;
//     if (!user) {
//       alert("You need to log in to like this video.");
//       return;
//     }

//     const userDoc = doc(firestore, "users", user.uid);
//     const videoDoc = doc(firestore, "videos", videoId);

//     try {
//       if (isLiked) {
//         // Hapus like
//         await updateDoc(userDoc, {
//           likedVideos: arrayRemove(videoId),
//           likes: ((await getDoc(userDoc)).data()?.likes || 0) - 1,
//         });
//         await updateDoc(videoDoc, {
//           likes: totalLikes - 1,
//         });
//         setTotalLikes(totalLikes - 1);
//       } else {
//         // Tambah like
//         await updateDoc(userDoc, {
//           likedVideos: arrayUnion(videoId),
//           likes: ((await getDoc(userDoc)).data()?.likes || 0) + 1,
//         });
//         await updateDoc(videoDoc, {
//           likes: totalLikes + 1,
//         });
//         setTotalLikes(totalLikes + 1);
//       }
//       setIsLiked(!isLiked); // Ubah status like
//     } catch (error) {
//       console.error("Error toggling like:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>GarudaVirtue - Video 1</Text>
//       </View>

//       {/* Player Wrapper */}
//       <View style={styles.playerWrapper}>
//         <YoutubePlayer height={300} play={true} videoId={"xpGJfE-Hg44"} />
//       </View>

//       {/* Like Button */}
//       <View style={styles.likeContainer}>
//         <TouchableOpacity
//           style={[styles.likeButton, isLiked && styles.liked]}
//           onPress={toggleLike}
//         >
//           <Text style={styles.likeButtonText}>
//             {isLiked ? "Liked" : "Like"} ({totalLikes})
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Description */}
//       <View style={styles.descriptionContainer}>
//         <Text style={styles.descriptionTitle}>Tentang Video</Text>
//         <Text style={styles.descriptionText}>
//           Video ini membahas tentang topik penting dalam Pancasila dan
//           Kewarganegaraan. Pastikan Anda memperhatikan detailnya untuk pemahaman
//           yang lebih baik.
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#560216",
//   },
//   header: {
//     backgroundColor: "#f9eedf",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#560216",
//   },
//   playerWrapper: {
//     width: "100%",
//     aspectRatio: 16 / 9,
//     backgroundColor: "#000",
//     marginVertical: 16,
//   },
//   likeContainer: {
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   likeButton: {
//     backgroundColor: "#f9eedf",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   liked: {
//     backgroundColor: "#4CAF50", // Hijau untuk like aktif
//   },
//   likeButtonText: {
//     color: "#560216",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   descriptionContainer: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 16,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   descriptionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#560216",
//     marginBottom: 8,
//   },
//   descriptionText: {
//     fontSize: 16,
//     color: "#333",
//     lineHeight: 24,
//     textAlign: "justify",
//   },
// });

// export default Vid1Screen;
