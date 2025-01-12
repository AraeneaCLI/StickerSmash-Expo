import { useState } from "react";
import { StyleSheet, FlatList, Platform, Pressable } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSource[]>([
    require("@/assets/images/fires.png"),
    require("@/assets/images/angry-face.png"),
    require("@/assets/images/explosion.png"),
    require("@/assets/images/sad.png"),
    require("@/assets/images/fires.png"),
    require("@/assets/images/shock.png"),
    require("@/assets/images/smiley.png"),
    require("@/assets/images/thumbs-up.png"),
  ]);

  console.log(emoji);

  return (
    <FlatList
      horizontal
      showsVerticalScrollIndicator={Platform.OS == "web"}
      data={emoji}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
