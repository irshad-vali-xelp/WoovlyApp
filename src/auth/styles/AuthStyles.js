import { StyleSheet } from "react-native";

const button = {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: 40,
  borderRadius: 2
};

const SignInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  subContainer: {
    flex: 1,
    padding: 50
  },
  headerTextContainer: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#15181b",
    fontSize: 26,
    fontWeight: "bold"
  },
  itCanHappenText: {
    color: "#15181b",
    fontSize: 14,
    marginBottom: 20
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  orContainer: {
    ...button
  },
  orText: {
    color: "#8d8d8d",
    fontSize: 12
  },
  signInButton: {
    ...button,
    width: 200,
    backgroundColor: "#ff7578",
    marginTop: 10
  },
  submitButton: {
    ...button,
    backgroundColor: "#ff7578",
    marginTop: 10
  },
  googleButton: {
    ...button,
    backgroundColor: "#4285f4"
  },
  faceBookButton: {
    ...button,
    backgroundColor: "#4267b2",
    marginTop: 10
  },
  termConditionContainer: {
    marginTop: 20
  },
  agreeText: {
    color: "rgba(21, 24, 27, 0.5)",
    fontSize: 10,
    textAlign: "center"
  },
  termsText: {
    color: "rgba(21, 24, 27, 0.5)",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center"
  },
  forgotButton: {
    ...button
  },

  signUpButton: {
    ...button,
    height: 60
  },
  forgotText: {
    color: "rgba(21, 24, 27, 0.5)",
    fontSize: 14
  },
  signUpText: {
    color: "rgba(21, 24, 27, 0.5)",
    fontSize: 16,
    fontWeight: "bold"
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e6eaea"
  }
});
export default SignInStyles;
