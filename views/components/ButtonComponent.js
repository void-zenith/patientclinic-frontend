import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonComponent = ({ label, color, onPressHandler, size }) => {
  return (
    <TouchableOpacity
      style={[style[color], style.buttonStyle, style[size]]}
      onPress={onPressHandler}
    >
      <Text style={style.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  primary: {
    backgroundColor: "#DA2C43",
  },
  secondary: {
    backgroundColor: "#368CE7",
  },
  buttonStyle: {
    padding: 14,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 14,
    marginBottom: 15,
  },
  w_80: {
    width: "80%",
  },
  w_100: {
    width: "100%",
  },
  buttonLabel: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});

export default ButtonComponent;
