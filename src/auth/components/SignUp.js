//import libraries
import React, { Component } from "react";
import { View, Text } from "react-native";
import Input from "../../corecomponent/input/input";
import Button from "../../corecomponent/button/Button";
import styles from "../styles/AuthStyles";
import {
  SIGN_UP,
  WELCOME_TO_WOOVLY,
  CONTINUE_WITH_GOOGLE,
  CONTINUE_WITH_FACEBOOK,
  AGREE_TO_WOOVLY,
  TERMS_OF_SERVICE,
  ALREADY_A_MEMBER
} from "../../utils/Constants";
import { SIGN_IN_CONTAINER } from "../../utils/routes";

// create a component
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
      dateOfBirth: ""
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

  setUserEmail = val => {
    this.setState({
      email: val
    });
  };

  setUserPassword = val => {
    this.setState({
      password: val
    });
  };

  setUserDateOfBirth = val => {
    this.setState({
      dateOfBirth: val
    });
  };

  signUp = () => {};

  goToSignIn = () => {
    var { navigate } = this.props.navigation;

    navigate(SIGN_IN_CONTAINER, {});
  };

  goToGoogle = () => {};
  goToFacebook = () => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>{WELCOME_TO_WOOVLY}</Text>
          </View>
          <Input
            placeholder={"Full name"}
            maxLength={30}
            onChangeText={val => this.setUserName(val)}
          />
          <Input
            placeholder={"Email"}
            maxLength={30}
            onChangeText={val => this.setUserEmail(val)}
          />
          <Input
            placeholder={"Password"}
            maxLength={30}
            onChangeText={val => this.setUserPassword(val)}
          />

          <Input
            placeholder={"Date of birth dd/mm/yyyy"}
            maxLength={30}
            onChangeText={val => this.setUserDateOfBirth(val)}
          />

          <View style={styles.centerContainer}>
            <Button
              label={SIGN_UP}
              buttonStyle={styles.signInButton}
              onPress={() => this.signUp()}
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
        </View>

        <View style={styles.divider} />
        <Button
          label={ALREADY_A_MEMBER}
          buttonStyle={styles.signUpButton}
          labelStyle={styles.signUpText}
          onPress={() => this.goToSignIn()}
        />
      </View>
    );
  }
}

//make this component available to the app
export default SignUp;
