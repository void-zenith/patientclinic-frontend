import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
const ViewMedicalRecord = ({ route, navigation }) => {
  const { medicalId } = route.params;

  const [medicalRecord, setmedicalRecord] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getMedicalRecord(medicalId);
  }, []);
  const getMedicalRecord = (id) => {
    fetch(`http://127.0.0.1:3000/record/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setmedicalRecord(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  const deleteMedicalRecord = () => {
    fetch(`http://127.0.0.1:3000/record/${medicalId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate("Home");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <View style={styles.viewMedicalContainer}>
      {isLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <>
          <View style={styles.eachMedical}>
            <Text style={styles.label}>Date:</Text>
            <Text>{medicalRecord.date}</Text>
          </View>
          <View style={styles.eachMedical}>
            <Text style={styles.label}>Record Title:</Text>
            <Text style={styles.recordLabel}>{medicalRecord.recordTitle}</Text>
          </View>
          <View style={styles.eachMedical}>
            <Text style={styles.label}>Blood Pressure (X/Y mmHg):</Text>
            <Text style={styles.recordLabel}>
              {medicalRecord.systolicBloodPressure}/
              {medicalRecord.diastolicBloodPressure} mmHg
            </Text>
          </View>
          <View style={styles.eachMedical}>
            <Text style={styles.label}>Respiratory Rate (X/min):</Text>
            <Text style={styles.recordLabel}>
              {medicalRecord.respiratoryRate}/min
            </Text>
          </View>
          <View style={styles.eachMedical}>
            <Text style={styles.label}>Blood Oxygen Level (X%):</Text>
            <Text style={styles.recordLabel}>
              {medicalRecord.bloodOxygenLevel}%
            </Text>
          </View>
          <View style={styles.eachMedical}>
            <Text style={styles.label}>Heartbeat Rate (X/min):</Text>
            <Text style={styles.recordLabel}>
              {medicalRecord.heartbeatRate}/min
            </Text>
          </View>
          <View style={styles.eachMedical}>
            <Text style={styles.label}>Record Summary:</Text>
            <Text style={styles.recordLabel}>
              {medicalRecord.recordSummary}
            </Text>
          </View>
          <ButtonComponent
            label="Delete Record"
            color="primary"
            onPressHandler={deleteMedicalRecord}
          ></ButtonComponent>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewMedicalContainer: {
    padding: 10,
  },
  eachMedical: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  recordLabel: {
    fontSize: 18,
  },
});
export default ViewMedicalRecord;
