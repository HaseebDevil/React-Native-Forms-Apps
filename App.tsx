import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import SignUp from "./screens/SignUp";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./screens/Login";
import Submit from "./screens/Submit";
import Searching from "./screens/Searching";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigatorParamList {}
  }
}

export type NavigatorParamList = {
  SignUp: undefined;
  Login: undefined;
  Submit: undefined;
  Searching: undefined;
};
const Drawer = createDrawerNavigator<NavigatorParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Drawer.Navigator>
        <Drawer.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            drawerActiveBackgroundColor: "#f0e1ff",
            drawerActiveTintColor: "#3c0a6b",
            drawerIcon: ({ color }) => (
              <AntDesign name="arrowleft" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerLabel: "Login",
            drawerIcon: ({ color }) => (
              <AntDesign name="arrowleft" size={24} color="black" />
            ),
          }}
        />

        <Drawer.Screen
          name="Submit"
          component={Submit}
          options={{
            drawerLabel: "Submit",
            drawerIcon: ({ color }) => (
              <AntDesign name="arrowleft" size={24} color="black" />
            ),
          }}
        />

        <Drawer.Screen
          name="Searching"
          component={Searching}
          options={{
            drawerLabel: "Searching",
            drawerIcon: ({ color }) => (
              <AntDesign name="arrowleft" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
