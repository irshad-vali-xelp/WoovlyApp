//import libraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../styles/AuthStyles";
import Input from "../../corecomponent/input/input";
import Button from "../../corecomponent/button/Button";
import {
  NEVER_MIND,
  IT_CAN_HAPPEN,
  SUBMIT,
  NOT_A_WOOVLY_YET
} from "../../utils/Constants";
import { SIGN_UP_CONTAINER, SIGN_IN_CONTAINER } from "../../utils/routes";

// create a component
class ForgotPassword extends Component {
  setUserEmail = val => {
    this.setState({
      email: val
    });
  };

  forgotPassword = () => {
    if (this.state.email) {
      fetch("https://alpha.woovly.com/sendPasswordLink", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.error.errCode === 0) {
            this.goToSignIn();
          } else {
            alert(responseJson.error.errMsg);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("Please enter your email.");
    }
  };

  goToSignUp = () => {
    var { navigate } = this.props.navigation;
    navigate(SIGN_UP_CONTAINER, {});
  };

  goToSignIn = () => {
    var { navigate } = this.props.navigation;
    navigate(SIGN_IN_CONTAINER, {});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>{NEVER_MIND}</Text>
            <Text style={styles.itCanHappenText}>{IT_CAN_HAPPEN}</Text>
          </View>
          <Input
            placeholder={"abc@xelpmoc.com"}
            maxLength={30}
            onChangeText={val => this.setUserEmail(val)}
          />
          <View style={styles.centerContainer}>
            <Button
              label={SUBMIT}
              buttonStyle={styles.submitButton}
              onPress={() => this.forgotPassword()}
            />
          </View>
        </View>
        <View style={styles.divider} />
        <Button
          label={NOT_A_WOOVLY_YET}
          buttonStyle={styles.signUpButton}
          labelStyle={styles.signUpText}
          onPress={() => this.goToSignUp()}
        />
      </View>
    );
  }
}

//make this component available to the app
export default ForgotPassword;
