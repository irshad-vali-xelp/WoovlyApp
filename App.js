import React, { Component } from "react";

import {
  View,
  WebView,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  Text
} from "react-native";
import { requestReadStoragePermission } from "./src/AndroiPermissionFile";
// https://www.tatacliq.com/
//https://alpha.woovly.com
//  uri: "https://www.tatacliq.com"
const height = Dimensions.get("window").height;

const url = "https://www.woovly.com/bucket-list";
// const url = "https://alpha.woovly.com";

const patchPostMessageFunction = function() {
  var originalPostMessage = window.postMessage;

  var patchedPostMessage = function(message, targetOrigin, transfer) {
    originalPostMessage(message, targetOrigin, transfer);
  };

  patchedPostMessage.toString = function() {
    return String(Object.hasOwnProperty).replace(
      "hasOwnProperty",
      "postMessage"
    );
  };

  window.postMessage = patchedPostMessage;
};

const patchPostMessageJsCode =
  Platform.OS === "ios" ? "(" + String(patchPostMessageFunction) + ")();" : "";

export default class App extends Component {
  componentDidMount() {
    requestReadStoragePermission();
  }

  render() {
    if (Platform.OS === "ios") {
      return (
        <View style={styles.container}>
          <WebView
            bounces={false}
            source={{
              uri: url
            }}
            style={{
              marginTop: 20
            }}
            injectedJavaScript={patchPostMessageJsCode}
            onMessage={m => this.onMessage(m)}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor={"white"} barStyle="dark-content" />
          <WebView
            source={{
              uri: url
            }}
            style={{
              marginTop: 0
            }}
            onMessage={m => this.onMessage(m)}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
