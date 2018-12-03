import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import SignIn from "./src/auth/SignIn";
import WebPage from "./src/web/WebPage";
const WoovlyStack = createStackNavigator({
  SignIn: { screen: SignIn },
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
