import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Input from "../componeents/Input";
import PrimaryButton from "../componeents/PrimaryButton";

import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const Searching = () => {
  const SearchingUpHandler = () => {
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View>
      <Image source={require("../assets/search.png")} style={styles.image} />
      <Text style={styles.heading}>Reset{"\n"} Password</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Password"
          Icon={<Feather name="unlock" size={24} color="#979aa1" />}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <Input
          placeholder="confirm new Password"
          Icon={<Feather name="unlock" size={24} color="#979aa1" />}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
      </View>

      <PrimaryButton
        text="Searching"
        onPress={SearchingUpHandler}
        // style={styles.btnContainer}
      />
    </View>
  );
};

export default Searching;

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 300,
    alignSelf: "center",
    marginVertical: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 30,
  },
  inputContainer: {
    marginVertical: 12,
  },
  headingText: {
    fontSize: 14,
    color: "#979aa1",
    lineHeight: 25,
  },
  link: {
    color: "#0165ff",
  },

  centerdText: {
    color: "#0165ff",
    alignSelf: "flex-end",
    fontSize: 16,
    fontWeight: "bold",
  },
  headingStyle: {
    fontSize: 14,
    color: "#979aa1",
    lineHeight: 25,
    marginLeft: 30,
    textAlign: "center",
  },
  links: {
    color: "#0165ff",
  },
  googeButton: {
    color: "#ccc",
    borderWidth: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    borderColor: "#ccc",
  },
  gBtn: {
    borderWidth: 1.3,
    marginTop: 30,
    width: "80%",
    padding: 12,
    justifyContent: "space-evenly",
    // justifyContent: "center",
    // alignItems: "center",
    // justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#ccd",
    flexDirection: "row",
    borderRadius: 8,
    borderColor: "#ccc",
  },
  img: {
    height: 20,
    width: 20,
    // resizeMode:"contain"
  },
});
