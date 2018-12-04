import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./inputStyle";
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
      <View style={this.props.inputContainer}>
        {this.props.srcLeft && (
          <Image
            source={this.props.srcLeft}
            style={this.props.iconStyle || styles.leftInlineImage}
          />
        )}
        <View style={styles.inputHolder}>
          <TextInput
            {...this.props}
            ref={input => {
              this.textInput = input;
            }}
            style={this.props.style}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry}
            returnKeyType={this.props.returnKeyType}
            autoCapitalize={this.props.autoCapitalize}
            autoCorrect={this.props.autoCorrect}
            placeholderTextColor={this.props.placeholderTextColor}
            underlineColorAndroid={this.props.underlineColorAndroid}
            maxLength={this.props.maxLength}
            numberOfLines={this.props.numberOfLines}
            keyboardType={this.props.keyboardType}
            onChangeText={val => this.onChange(val)}
            editable={this.props.editable}
          />
        </View>
        {this.props.srcRight && (
          <Image source={this.props.srcRight} style={styles.rightInlineImage} />
        )}
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
  inputContainer: styles.borderContainer,
  style: styles.input,
  srcLeft: null,
  srcRight: null,
  placeholder: "enter text",
  autoCapitalize: "none",
  underlineColorAndroid: "transparent",
  placeholderTextColor: "rgba(0,0,0,0.3)",
  keyboardType: "default",
  multiline: false,
  secureTextEntry: false,
  autoFocus: false,
  editable: true
};
