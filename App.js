import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import SignIn from "./src/auth/components/SignIn";
import SignUp from "./src/auth/components/SignUp";
import WebPage from "./src/web/WebPage";
import ForgotPassword from "./src/auth/components/ForgotPassword";
const WoovlyStack = createStackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },
  WebPage: { screen: WebPage }
});

export default class App extends Component<Props> {
  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return <WoovlyStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
