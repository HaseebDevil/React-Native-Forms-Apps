import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Feather, MaterialIcons } from "@expo/vector-icons";
import Input from "../componeents/Input";
import PrimaryButton from "../componeents/PrimaryButton";

const SignUp = () => {
  const sighnUpHandler = () => {
    console.log("email", email);
    console.log("name", name);
    console.log("password", password);
    console.log("mobile", mobile);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <View>
      <Image source={require("../assets/signup.png")} style={styles.image} />
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email ID"
          Icon={
            <MaterialIcons name="alternate-email" size={24} color="#979aa1" />
          }
          onChangeText={(text: string) => setEmail(text)}
          value={email}
        />

        <Input
          placeholder="Full Name"
          Icon={<FontAwesome name="user-o" size={24} color="#979aa1" />}
          onChangeText={(text: string) => setName(text)}
          value={name}
        />
        <Input
          placeholder="Password"
          Icon={<Feather name="unlock" size={24} color="#979aa1" />}
          onChangeText={(text: string) => setPassword(text)}
          value={password}
        />
        <Input
          placeholder="Mobile No"
          Icon={<FontAwesome name="phone" size={24} color="#979aa1" />}
          onChangeText={(text: string) => setMobile(text)}
          value={mobile}
        />
      </View>

      <Text style={styles.headingText}>
        By sighning up,You agree to our{" "}
        <Text style={styles.link}>terms and condition</Text> and{" "}
        <Text style={styles.link}>privacy policy</Text>
      </Text>

      <PrimaryButton text="continue" onPress={sighnUpHandler} />
      <Text style={styles.centerdText}>
        Joined us Before? <Text style={styles.link}>Login</Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 300,
    alignSelf: "center",
    marginVertical: 10,
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
    marginLeft: 30,
  },
  link: {
    color: "#0165ff",
  },

  centerdText: {
    textAlign: "center",
    color: "#979aa1",
  },
});
