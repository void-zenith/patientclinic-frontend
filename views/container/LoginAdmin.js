import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
const LoginAdmin = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const changeIsPassword = () => {
    setIsPassword(!isPassword);
  };
  const userNameHandler = (text) => {
    setUserName(text);
  };
  const passwordHandler = (text) => {
    setPassword(text);
  };
  const onSubmitBtn = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.primaryHead}>Admin Login</Text>
      <View style={styles.loginForm}>
        <View style={styles.usernameInputContainer}>
          <Text style={styles.label}>Enter your username:</Text>
          <TextInput
            name="username"
            placeholder="username"
            style={styles.inputField}
            value={userName}
            onChangeText={(text) => userNameHandler(text)}
          ></TextInput>
        </View>
        <View style={styles.passwordLabelContainer}>
          <Text style={styles.label}>Enter your password:</Text>
          <TouchableOpacity
            style={styles.hideShowBtn}
            onPress={changeIsPassword}
          >
            <Text>{isPassword ? "Show" : "Hide"}</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.inputField}
          name="password"
          placeholder="password"
          value={password}
          onChangeText={(text) => passwordHandler(text)}
          secureTextEntry={isPassword}
        ></TextInput>
      </View>
      <ButtonComponent
        label="Login"
        color="primary"
        onPressHandler={onSubmitBtn}
        size="w_80"
      ></ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 15,
    borderWidth: 1,
    marginTop: 7,
    borderRadius: 10,
  },
  loginForm: {
    width: "80%",
    marginBottom: 40,
  },
  primaryHead: {
    marginBottom: 40,
    fontSize: 40,
  },
  usernameInputContainer: {
    marginBottom: 20,
  },
  passwordLabelContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 18,
  },
  hideShowBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
});
export default LoginAdmin;
