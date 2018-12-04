import React, { Component } from "react";

import {
  View,
  WebView,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  Text,
  TouchableOpacity
} from "react-native";
import { requestReadStoragePermission } from "../../src/AndroiPermissionFile";

const height = Dimensions.get("window").height;
const url = "https://alpha.woovly.com/";
//const url = "http://10.10.10.171:8080";

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

export default class WebPage extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    let userObject = params.USERDATA;
    console.log(params.userObject);
    this.state = {
      userData: userObject
    };
  }
  static navigationOptions = {
    header: null
  };
  sendData = () => {
    let values = this.state.userData;
    this.webView.postMessage(values);
  };

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
            ref={view => (this.webView = view)}
            onLoad={() => this.sendData()}
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
            ref={view => (this.webView = view)}
            onLoad={() => this.sendData()}
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
