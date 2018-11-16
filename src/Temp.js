import React, { Component } from "react";

import {
  View,
  WebView,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform
} from "react-native";
const height = Dimensions.get("window").height;
const Temp = () => {
  console.log("Height", height);
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} barStyle={"light-content"} />{" "}
      <WebView
        source={{
          uri: "https://alpha.woovly.com"
        }}
        style={{
          marginTop: Platform.OS === "ios" ? 20 : 0
        }}
      />{" "}
    </View>
  );
};
Temp.navigationOptions = {
  title: ""
};
export default Temp;

const styles = StyleSheet.create({
  container: {
    height: height,
    flexDirection: "column",
    backgroundColor: "#505F69"
  }
});
