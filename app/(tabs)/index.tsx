import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const Placeholderimg = require("@/assets/images/placeholder.jpg");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("No Picture Selected");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={Placeholderimg} selectedImage={selectedImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button theme="primary" label="Upload" onPress={pickImageAsync} />
        <Button label="Use this" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    // justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 500,
    // backgroundColor: "#fff",
    // borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },
  footerContainer: {
    marginTop: 20,
    flex: 1 / 3,
    alignItems: "center",
  },
});
