// import React from "react";
// import { StyleSheet, View, Dimensions } from "react-native";
// import * as FileSystem from "expo-file-system";
// import PDFReader from "react-native-pdf";
// import { WebView } from "react-native-webview";

// export default function SilabusScreen() {
//   const pdfSource = {
//     uri: `${FileSystem.documentDirectory}PKN.pdf`,
//   };

//   return (
//     <View style={styles.container}>
//       <PDFReader style={styles.pdf} source={pdfSource} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#560216",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   pdf: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function SilabusScreen() {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{
          uri: "https://drive.google.com/file/d/1tP6zUvPbZyqV9xZMHzDpLR98g98TtPf1/view?usp=sharing",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#560216",
  },
  webview: {
    flex: 1,
  },
});
