//import libraries and files
import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import Input from "../../corecomponent/input/input";
import Button from "../../corecomponent/button/Button";
import styles from "../styles/AuthStyles";
import {
  SIGN_IN,
  LOGIN_TO_SEE_MORE,
  CONTINUE_WITH_GOOGLE,
  CONTINUE_WITH_FACEBOOK,
  AGREE_TO_WOOVLY,
  TERMS_OF_SERVICE,
  NOT_A_WOOVLY_YET
} from "../../utils/Constants";
import {
  SIGN_UP_CONTAINER,
  WEB_PAGE,
  FORGOT_PASSWORD_CONTAINER
} from "../../utils/routes";

//Component
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  static navigationOptions = {
    header: null
  };
  setUserName = val => {
    this.setState({
      userName: val
    });
  };
  setUserPassword = val => {
    this.setState({
      password: val
    });
  };
  signIn = () => {
    if (this.state.userName && this.state.password) {
      fetch("https://alpha.woovly.com/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.userName,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.error.errCode === 0) {
            AsyncStorage.setItem("USER", JSON.stringify(responseJson));
            this.navigateToWebPage(JSON.stringify(responseJson));
          } else {
            alert(responseJson.error.errMsg);
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("Please enter your username and password");
    }
  };

  goToGoogle = () => {};
  goToFacebook = () => {};
  goToForgotPassword = () => {
    var { navigate } = this.props.navigation;
    navigate(FORGOT_PASSWORD_CONTAINER, {});
  };
  goToSignUp = () => {
    var { navigate } = this.props.navigation;

    navigate(SIGN_UP_CONTAINER, {});
  };

  navigateToWebPage = signInData => {
    console.log("signInData", signInData);
    var { navigate } = this.props.navigation;
    navigate(WEB_PAGE, { USERDATA: signInData });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>{LOGIN_TO_SEE_MORE}</Text>
          </View>

          <Input
            placeholder={"Email"}
            maxLength={30}
            onChangeText={val => this.setUserName(val)}
          />
          <Input
            placeholder={"Password"}
            maxLength={30}
            onChangeText={val => this.setUserPassword(val)}
          />
          <View style={styles.centerContainer}>
            <Button
              label={SIGN_IN}
              buttonStyle={styles.signInButton}
              onPress={() => this.signIn()}
            />
          </View>

          <View style={styles.orContainer}>
            <Text style={styles.orText}>{"--- OR ---"}</Text>
          </View>

          <Button
            label={CONTINUE_WITH_GOOGLE}
            buttonStyle={styles.googleButton}
            onPress={() => this.goToGoogle()}
          />

          <Button
            label={CONTINUE_WITH_FACEBOOK}
            buttonStyle={styles.faceBookButton}
            onPress={() => this.goToFacebook()}
          />

          <View style={styles.termConditionContainer}>
            <Text style={styles.agreeText}>{AGREE_TO_WOOVLY}</Text>
            <Text style={styles.termsText}>{TERMS_OF_SERVICE}</Text>
          </View>

          <Button
            label={"Forgot password?"}
            buttonStyle={styles.forgotButton}
            labelStyle={styles.forgotText}
            onPress={() => this.goToForgotPassword()}
          />
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

export default SignIn;
