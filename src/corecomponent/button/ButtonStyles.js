import { StyleSheet } from "react-native";

const ButtonStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "100%",
    backgroundColor: "#ff7578",
    flexDirection: "row",
    borderRadius: 2,
    marginTop: 10
  },
  topText: {
    marginBottom: 1
  },
  leftText: {
    marginRight: 5
  },
  rightText: {
    marginLeft: 5
  },
  bottomText: {
    marginTop: 5
  },
  label: {
    fontSize: 16,
    color: "#ffffff"
  },
  content: {
    flexDirection: "row",
    alignItems: "center"
  },
  //// AnimatedButton styles
  animatedButton: {
    width: 200,
    height: 50,
    backgroundColor: "#25CED1",
    borderRadius: 25
  },
  defaultLoadingTouch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  defaultLoadingText: {
    color: "#FFF"
  }
});

export default ButtonStyles;
