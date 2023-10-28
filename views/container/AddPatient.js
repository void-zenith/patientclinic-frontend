import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
const AddPatient = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const clearBtn = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
  };
  const addBtn = () => {
    fetch("http://127.0.0.1:3000/patient", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          navigation.navigate("Home");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <View style={style.addPatientContainer}>
      <View style={style.eachInputContainer}>
        <Text style={style.label}>Enter Your First Name:</Text>
        <TextInput
          onChangeText={(text) => setFirstName(text)}
          style={style.inputContainer}
          placeholder="First Name:"
          value={firstName}
        ></TextInput>
      </View>
      <View style={style.eachInputContainer}>
        <Text style={style.label}>Enter Your Last Name:</Text>
        <TextInput
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          style={style.inputContainer}
          placeholder="Last Name:"
        ></TextInput>
      </View>
      <View style={style.eachInputContainer}>
        <Text style={style.label}>Enter Your Email:</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={style.inputContainer}
          placeholder="Email:"
        ></TextInput>
      </View>
      <View style={style.eachInputContainer}>
        <Text style={style.label}>Enter Your Address:</Text>
        <TextInput
          value={address}
          style={style.inputContainer}
          onChangeText={(text) => setAddress(text)}
          placeholder="Address:"
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
          label="Add Patient"
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

export default AddPatient;
