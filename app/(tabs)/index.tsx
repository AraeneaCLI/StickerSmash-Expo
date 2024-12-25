import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/button";
import * as ImagePicker from "expo-image-picker";
import IconButton from "../components/IconButton";
import CircleButton from "../components/CircleButton";
import EmojiPicker from "../components/EmojiPicker";
import { useState } from "react";

const Placeholderimg = require("@/assets/images/placeholder.jpg");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showappoptions, setshowappoptions] = useState<boolean>(false);
  const [ismodalvisible, setismodalvisible] = useState<boolean>(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // console.log(result);
      setSelectedImage(result.assets[0].uri);
      setshowappoptions(true);
    } else {
      alert("No Picture Selected");
    }
  };

  const onReset = () => {
    setshowappoptions(false);
  };

  const onAddSticker = () => {
    setismodalvisible(true);
  };

  const onCloseModal = () => {
    setismodalvisible(false);
  };

  const onSaveImageAsync = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={Placeholderimg} selectedImage={selectedImage} />
      </View>

      {showappoptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a Photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this Photo"
            onPress={() => setshowappoptions(true)}
          />
        </View>
      )}

      <EmojiPicker isVisible={ismodalvisible} onclose={onCloseModal} />
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
