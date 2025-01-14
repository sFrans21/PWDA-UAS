// import { StyleSheet, Image, Platform } from "react-native";

// import { Collapsible } from "@/components/Collapsible";
// import { ExternalLink } from "@/components/ExternalLink";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { IconSymbol } from "@/components/ui/IconSymbol";

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
//       headerImage={
//         <IconSymbol
//           size={310}
//           color="#808080"
//           name="chevron.left.forwardslash.chevron.right"
//           style={styles.headerImage}
//         />
//       }
//     >
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Explore</ThemedText>
//       </ThemedView>
//       <ThemedText>
//         This app includes example code to help you get started.
//       </ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{" "}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
//           and{" "}
//           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in{" "}
//           <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the
//           web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
//           in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the{" "}
//           <ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
//           provide files for different screen densities
//         </ThemedText>
//         <Image
//           source={require("@/assets/images/react-logo.png")}
//           style={{ alignSelf: "center" }}
//         />
//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Custom fonts">
//         <ThemedText>
//           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
//           to see how to load{" "}
//           <ThemedText style={{ fontFamily: "SpaceMono" }}>
//             custom fonts such as this one.
//           </ThemedText>
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{" "}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
//           lets you inspect what the user's current color scheme is, and so you
//           can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{" "}
//           <ThemedText type="defaultSemiBold">
//             components/HelloWave.tsx
//           </ThemedText>{" "}
//           component uses the powerful{" "}
//           <ThemedText type="defaultSemiBold">
//             react-native-reanimated
//           </ThemedText>{" "}
//           library to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The{" "}
//               <ThemedText type="defaultSemiBold">
//                 components/ParallaxScrollView.tsx
//               </ThemedText>{" "}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: "#808080",
//     bottom: -90,
//     left: -35,
//     position: "absolute",
//   },
//   titleContainer: {
//     flexDirection: "row",
//     gap: 8,
//   },
// });

// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Linking,
// } from "react-native";

// type Module = {
//   id: string;
//   title: string;
//   image: any;
//   link: string;
// };

// const modules: Module[] = [
//   {
//     id: "1",
//     title: "Modul 1",
//     image: require("@/assets/images/Pancasila dan Kewarganegaraan - KU2071/1.png"),
//     link: "https://docs.google.com/presentation/d/1YH9NUuP95MIHjiKIocyfmD8CeFNEdK4s/edit#slide=id.p1",
//   },
//   {
//     id: "2",
//     title: "Modul 2",
//     image: require("@/assets/images/Pancasila dan Kewarganegaraan - KU2071/2.png"),
//     link: "https://docs.google.com/presentation/d/1YH9NUuP95MIHjiKIocyfmD8CeFNEdK4s/edit#slide=id.p2",
//   },
//   // Tambahkan modul lainnya sesuai file HTML
// ];

// function ModulScreen() {
//   const renderModul = ({ item }: { item: Module }) => (
//     <View style={styles.card}>
//       <Image source={item.image} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => Linking.openURL(item.link)}
//       >
//         <Text style={styles.buttonText}>Lihat Modul</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <FlatList
//       data={modules}
//       renderItem={renderModul}
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={styles.container}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 16,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginVertical: 20,
//     textAlign: "center",
//     color: "#333",
//   },
//   list: {
//     alignItems: "center",
//   },
//   card: {
//     backgroundColor: "#f8f8f8",
//     borderRadius: 8,
//     padding: 16,
//     margin: 8,
//     alignItems: "center",
//     width: "45%",
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   image: {
//     width: "100%",
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: "#007BFF",
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 14,
//   },
// });

// export default { ModulScreen };

// src/screens/ModuleScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Komponen untuk setiap kartu modul
const ModuleCard: React.FC<{ title: string; imageUrl: string }> = ({
  title,
  imageUrl,
}) => {
  return (
    <View style={styles.moduleCard}>
      <Image source={{ uri: imageUrl }} style={styles.moduleImage} />
      <Text style={styles.moduleTitle}>{title}</Text>
      <TouchableOpacity style={styles.inlineButton}>
        <Text style={styles.buttonText}>Lihat Modul</Text>
      </TouchableOpacity>
    </View>
  );
};

const ModuleScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>GarudaVirtue</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Modul</Text>
        <View style={styles.gridContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <ModuleCard
              key={item}
              title={`Modul ${item}`}
              imageUrl={`https://via.placeholder.com/150?text=Modul+0${item}`}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#eee",
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
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  moduleCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
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
  moduleTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  inlineButton: {
    backgroundColor: "#b17457",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ModuleScreen;
