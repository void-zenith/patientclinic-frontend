import React, { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { View, Text, StyleSheet, TextInput } from "react-native";
const AddUser = ({ navigation }) => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const clearBtn = () => {
    setusername("");
    setPassword("");
  };
  const addBtn = () => {
    fetch("http://127.0.0.1:3000/user", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        userType: "user",
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate("Admin");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <View>
      <View style={style.eachInputContainer}>
        <Text style={style.label}>Enter username:</Text>
        <TextInput
          onChangeText={(text) => setusername(text)}
          style={style.inputContainer}
          placeholder="User Name:"
          value={username}
        ></TextInput>
      </View>
      <View style={style.eachInputContainer}>
        <Text style={style.label}>Enter Password for user:</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={style.inputContainer}
          placeholder="Password:"
        ></TextInput>
      </View>
      <View style={style.buttonContainer}>
        <ButtonComponent
          newStyles={style.eachButton}
          label="Clear"
          color="secondary"
          onPressHandler={clearBtn}
        ></ButtonComponent>
        <ButtonComponent
          newStyles={style.eachButton}
          label="Add User"
          color="primary"
          onPressHandler={addBtn}
        ></ButtonComponent>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  addPatientContainer: {
    padding: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  eachInputContainer: {
    marginBottom: 13,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eachButton: {
    flex: 1,
    marginHorizontal: "1%",
    minWidth: "48%",
  },
});
export default AddUser;
