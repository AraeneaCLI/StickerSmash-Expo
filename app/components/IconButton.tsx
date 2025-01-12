import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: props) {
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons
        name={icon}
        size={24}
        color="black"
        style={styles.iconButton}
      />
      <Text style={styles.iconbuttonlabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },

  iconbuttonlabel: {
    color: "black",
    marginTop: 12,
  },
});
