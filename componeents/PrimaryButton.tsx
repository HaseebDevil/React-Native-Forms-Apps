import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
interface IProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

const PrimaryButton: React.FC<IProps> = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  buttonContainer: {
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 10,
    marginTop: 20,
    marginVertical: 20,
    borderColor: "transparent",
  },
  btnText: {
    color: "#ccc",
    fontSize: 16,
    fontWeight: "bold",
  },
});
