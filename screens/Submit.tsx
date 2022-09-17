import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "../componeents/Input";
import PrimaryButton from "../componeents/PrimaryButton";

const Submit = () => {
  const submitUpHandler = () => {
    console.log("email", email);
  };

  const [email, setEmail] = useState("");

  return (
    <View>
      <Image source={require("../assets/submits.png")} style={styles.image} />
      <Text style={styles.heading}>Forgot{"\n"}Password</Text>
      <Text style={styles.headingText}>
        Don't worry it happens.please enter the adress associated with your
        account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Email ID"
          Icon={
            <MaterialIcons name="alternate-email" size={24} color="#979aa1" />
          }
          onChangeText={(text: string) => setEmail(text)}
          value={email}
        />
      </View>

      <PrimaryButton text="Submit" onPress={submitUpHandler} />
    </View>
  );
};

export default Submit;

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
    marginTop: 20,
  },
  inputContainer: {
    marginVertical: 12,
  },
  headingText: {
    fontSize: 18,
    color: "#979aa1",
    lineHeight: 20,
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
