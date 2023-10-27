import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
const InputField = ({ label, placeholder, name, inputValue }) => {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (text) => {
    setInputValue(text);
  };
  return (
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      placeholderTextColor="#BEFFF7aa"
      name={name}
      value={inputValue}
      onChangeText={(text) => onChangeHandler(text)}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {},
});
export default InputField;
