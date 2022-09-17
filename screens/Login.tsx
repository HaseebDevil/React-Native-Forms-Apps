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
  MaterialIcons,
} from "@expo/vector-icons";
import SecondaryButton from "../componeents/SecondaryButton";

const Login = () => {
  const loginUpHandler = () => {
    console.log("password", password);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Image source={require("../assets/log.png")} style={styles.image} />
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email ID"
          Icon={
            <MaterialIcons name="alternate-email" size={24} color="#979aa1" />
          }
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <Input
          placeholder="Password"
          Icon={<Feather name="unlock" size={24} color="#979aa1" />}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <Text style={styles.centerdText}>Forget Password</Text>
      <PrimaryButton
        text="login"
        onPress={loginUpHandler}
        // style={styles.btnContainer}
      />
      <SecondaryButton
        title="Login with Google"
        onPress={() => console.log("hello")}
        icon={require("../assets/google.png")}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 16,
          fontWeight: "500",
          color: "#979aa1",
        }}
      >
        or
      </Text>

      <Text style={styles.headingStyle}>
        New to logistics? <Text style={styles.links}>Register</Text>
      </Text>
    </View>
  );
};

export default Login;

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
});
