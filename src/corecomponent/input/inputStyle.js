import { StyleSheet } from "react-native";

const InputStyles = StyleSheet.create({
  borderContainer: {
    backgroundColor: "#e6eaea",
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 45,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 2
  },
  inputHolder: {
    height: "100%",
    flex: 1
  },
  input: {
    height: 45,
    fontSize: 14,
    padding: 10,
    color: "#15181b"
  }
});
export default InputStyles;
