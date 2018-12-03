//import libraries and files
import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import Input from "../corecomponent/input/input";
import Button from "../corecomponent/button/Button";
import { NavigationActions, StackActions } from "react-navigation";
//Component
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  username = val => {
    this.setState({
      username: val
    });
  };
  userpassword = val => {
    this.setState({
      password: val
    });
  };
  submitButton = () => {
    // if (this.props.netStatus) {
    if (this.state.username && this.state.password) {
      fetch("https://alpha.woovly.com/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.username,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          AsyncStorage.setItem("USER", JSON.stringify(responseJson));
          this.navigateToWebPage();
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("Please enter your username and password");
    }
    // } else {
    //   Toast.show(INTERNET_TEXT);
    // }
  };

  navigateToWebPage = () => {
    var { navigate } = this.props.navigation;

    navigate("WebPage", {});
  };
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder={"Enter your user name"}
          maxLength={30}
          onChangeText={val => this.username(val)}
        />
        <Input
          placeholder={"Enter your password"}
          maxLength={30}
          onChangeText={val => this.userpassword(val)}
        />
        <Button label={"Submit"} onPress={() => this.submitButton()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

export default SignIn;
