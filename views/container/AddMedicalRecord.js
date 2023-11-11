import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import Toast from "react-native-toast-message";
const AddMedicalRecord = ({ route }) => {
  const { patientId } = route.params;

  const date = `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`;
  const [recordTitle, setRecordTitle] = useState(" ");
  const [systolicbloodPressure, setSystolicBloodPressure] = useState(" ");
  const [diastolicbloodPressure, setDiastolicBloodPressure] = useState(" ");
  const [respiratoryRate, setRespiratoryRate] = useState(" ");
  const [bloodOxygenLevel, setBloodOxygenLevel] = useState(" ");
  const [heartbeatRate, setHeartBeatRate] = useState(" ");
  const [recordSummary, setRecordSummary] = useState(" ");

  const clearBtn = () => {
    setRecordTitle(" ");
    setSystolicBloodPressure(" ");
    setDiastolicBloodPressure(" ");
    setRespiratoryRate(" ");
    setBloodOxygenLevel(" ");
    setHeartBeatRate(" ");
    setRecordSummary(" ");
  };
  const addRecord = () => {
    fetch("http://127.0.0.1:3000/record", {
      method: "POST",
      body: JSON.stringify({
        recordTitle: recordTitle,
        patientId: patientId,
        date: `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`,
        bloodOxygenLevel: bloodOxygenLevel,
        respiratoryRate: respiratoryRate,
        systolicbloodPressure: systolicbloodPressure,
        diastolicbloodPressure: diastolicbloodPressure,
        heartbeatRate: heartbeatRate,
        recordSummary: recordSummary,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          navigation.goBack();
          Toast.show({
            type: "success",
            text1: "Hello",
            text2: "This is some something 👋",
          });
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <View style={styles.addMedicalContainer}>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Date:</Text>
        <Text>{date}</Text>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Record Title:</Text>
        <TextInput
          onChangeText={(text) => setRecordTitle(text)}
          style={styles.inputContainer}
          placeholder="Record Title"
        ></TextInput>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Blood Pressure (X/Y mmHg):</Text>
        <View style={styles.bloodpressurecontainer}>
          <View style={styles.eachBloodPressure}>
            <Text>Systolic:</Text>
            <TextInput
              onChangeText={(text) => setSystolicBloodPressure(text)}
              style={styles.inputContainer}
              placeholder="XXX"
            ></TextInput>
          </View>
          <View style={styles.eachBloodPressure}>
            <Text>Diastolic:</Text>
            <TextInput
              onChangeText={(text) => setDiastolicBloodPressure(text)}
              style={styles.inputContainer}
              placeholder="YYY"
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Respiratory Rate (X/min):</Text>
        <TextInput
          onChangeText={(text) => setRespiratoryRate(text)}
          style={styles.inputContainer}
          placeholder="X/min"
        ></TextInput>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Blood Oxygen Level (X%):</Text>
        <TextInput
          onChangeText={(text) => setBloodOxygenLevel(text)}
          style={styles.inputContainer}
          placeholder="X%"
        ></TextInput>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Heartbeat Rate (X/min):</Text>
        <TextInput
          onChangeText={(text) => setHeartBeatRate(text)}
          style={styles.inputContainer}
          placeholder="X/min"
        ></TextInput>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Record Summary:</Text>
        <TextInput
          style={[styles.inputContainer, styles.textarea]}
          placeholder="Summary"
          onChangeText={(text) => setRecordSummary(text)}
          multiline={true}
          numberOfLines={9}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          newStyles={styles.eachButton}
          label="Clear"
          color="secondary"
          onPressHandler={clearBtn}
        ></ButtonComponent>
        <ButtonComponent
          newStyles={styles.eachButton}
          label="Add Record"
          color="primary"
          onPressHandler={addRecord}
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
  bloodpressurecontainer: {
    flexDirection: "row",
  },
  eachBloodPressure: {
    flex: 1,
    marginHorizontal: "1%",
  },
});
export default AddMedicalRecord;
