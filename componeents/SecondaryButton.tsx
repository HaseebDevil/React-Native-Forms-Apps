import {
  StyleSheet,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";

interface IProps {
  title: string;
  onPress: () => void;
  icon?: ImageSourcePropType;
}

const SecondaryButton: React.FC<IProps> = ({ title, onPress, icon }) => {
  return (
    <Pressable style={styles.gBtn} onPress={onPress}>
      {icon && <Image source={icon} style={styles.img} />}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  gBtn: {
    borderWidth: 1.3,
    marginTop: 30,
    width: "80%",
    padding: 12,
    justifyContent: "space-evenly",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 8,
    borderColor: "#ccc",
  },
  img: {
    height: 20,
    width: 20,
  },

  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    borderColor: "#ccc",
  },
});
