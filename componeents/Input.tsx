import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
interface IProps {
  placeholder: string;
  Icon: React.ReactNode;
  onChangeText: ((text: string) => void) | undefined;
  value: string | undefined;
}
const Input = ({ placeholder, Icon, onChangeText, value }: IProps) => {
  return (
    <View style={styles.inputContainer}>
      {Icon}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 12,
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: "bold",
    width: "90%",
    borderBottomColor: "#ccc",
  },
});
