import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
const AddMedicalRecord = () => {
  return (
    <View style={styles.addMedicalContainer}>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Date:</Text>
        <Text>
          {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
        </Text>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Record Title:</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Record Title"
        ></TextInput>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Blood Pressure (X/Y mmHg):</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="X/Y mmHg"
        ></TextInput>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Respiratory Rate (X/min):</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="X/min"
        ></TextInput>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Blood Oxygen Level (X%):</Text>
        <TextInput style={styles.inputContainer} placeholder="X%"></TextInput>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Heartbeat Rate (X/min):</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="X/min"
        ></TextInput>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Record Summary:</Text>
        <TextInput
          style={[styles.inputContainer, styles.textarea]}
          placeholder="Summary"
          multiline={true}
          numberOfLines={9}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          newStyles={styles.eachButton}
          label="Clear"
          color="secondary"
        ></ButtonComponent>
        <ButtonComponent
          newStyles={styles.eachButton}
          label="Add Record"
          color="primary"
        ></ButtonComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addMedicalContainer: {
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eachButton: {
    flex: 1,
    marginHorizontal: "1%",
    minWidth: "48%",
  },
  eachMedical: {
    marginBottom: 10,
  },
  textarea: {
    minHeight: "10%",
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
});
export default AddMedicalRecord;
