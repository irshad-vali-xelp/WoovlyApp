//import libraries and files
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import styles from "./ButtonStyles";

class Button extends Component {
  onPress = () => {
    this.props.onPress && this.props.onPress();
  };

  renderTopText() {
    if (this.props.label && this.props.labelPosition === "top") {
      return (
        <Text style={[styles.topText, this.props.labelStyle]}>
          {this.props.label}
        </Text>
      );
    } else {
      return null;
    }
  }

  renderLeftText() {
    if (this.props.label && this.props.labelPosition === "left") {
      return (
        <Text style={[styles.leftText, this.props.labelStyle]}>
          {this.props.label}
        </Text>
      );
    } else {
      return null;
    }
  }

  renderRightText() {
    if (this.props.label && this.props.labelPosition === "right") {
      return (
        <Text style={[styles.rightText, this.props.labelStyle]}>
          {this.props.label}
        </Text>
      );
    } else {
      return null;
    }
  }

  renderBottomText() {
    if (this.props.label && this.props.labelPosition === "bottom") {
      return (
        <Text style={[styles.bottomText, this.props.labelStyle]}>
          {this.props.label}
        </Text>
      );
    } else {
      return null;
    }
  }

  renderIcon() {
    if (this.props.iconName) {
      return (
        <Icon
          size={this.props.iconSize}
          name={this.props.iconName}
          color={this.props.iconColor}
        />
      );
    }
  }
  renderLoader() {
    return (
      <ActivityIndicator
        size={this.props.indicatorSize}
        color={this.props.indicatorColor}
      />
    );
  }
  render() {
    return (
      <TouchableOpacity
        style={this.props.buttonStyle}
        onPress={this.onPress}
        disabled={this.props.loading}
        activeOpacity={this.props.opacity}
      >
        {this.props.loading ? (
          this.renderLoader()
        ) : (
          <View style={this.props.contentHolder}>
            {this.renderTopText()}

            {this.renderLeftText()}
            {this.renderIcon()}
            {this.renderRightText()}

            {this.renderBottomText()}
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

//To make this component available to the app
Button.propTypes = {
  buttonStyle: PropTypes.any,
  labelPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  labelStyle: PropTypes.any,
  contentHolder: PropTypes.any,
  label: PropTypes.string,
  onPress: PropTypes.func,
  iconSize: PropTypes.number,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  onPress: PropTypes.func,
  opacity: PropTypes.number,
  indicatorSize: PropTypes.string,
  indicatorColor: PropTypes.string,
  loading: PropTypes.bool
};
Button.defaultProps = {
  buttonStyle: styles.container,
  iconSize: 30,
  labelPosition: "right",
  labelStyle: styles.label,
  indicatorSize: "small",
  opacity: 0.7,
  contentHolder: styles.content
};
export default Button;
