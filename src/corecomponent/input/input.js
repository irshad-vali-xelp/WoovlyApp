import React, { Component } from "react";
import PropTypes from "prop-types";
import InputStyles from "./inputStyle";
import { View, TextInput } from "react-native";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value ? props.value : ""
    };
  }

  onChange(val) {
    if (this.props.onChangeText) {
      this.props.onChangeText(val);
    }
    this.setState({ value: val });
  }
  clearInput = () => {
    this.textInput.clear();
  };
  render() {
    return (
      <View style={InputStyles.Container}>
        <TextInput
          ref={input => {
            this.textInput = input;
          }}
          style={this.props.style}
          value={this.props.value ? this.props.value : this.state.value}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCapitalize={this.props.autoCapitalize}
          placeholderTextColor={this.props.placeholderTextColor}
          underlineColorAndroid={this.props.underlineColorAndroid}
          keyboardType={this.props.keyboardType}
          multiline={this.props.multiline}
          maxLength={this.props.maxLength}
          autoFocus={this.props.autoFocus}
          editable={this.props.editable}
          onChangeText={val => this.onChange(val)}
        />
      </View>
    );
  }
}

export default Input;
Input.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  maxLength: PropTypes.number,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  style: PropTypes.any,
  autoFocus: PropTypes.bool,
  editable: PropTypes.bool
};
Input.defaultProps = {
  style: InputStyles.input,
  placeholder: "enter text",
  autoCapitalize: "none",
  underlineColorAndroid: "transparent",
  placeholderTextColor: "#ccc",
  keyboardType: "default",
  multiline: false,
  secureTextEntry: false,
  autoFocus: false,
  editable: true
};
