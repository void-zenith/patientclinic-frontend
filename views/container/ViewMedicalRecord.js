import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewMedicalRecord = () => {
  return (
    <View style={styles.viewMedicalContainer}>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Date:</Text>
        <Text>
          {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
        </Text>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Record Title:</Text>
        <Text style={styles.recordLabel}>This is Record 1</Text>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Blood Pressure (X/Y mmHg):</Text>
        <Text style={styles.recordLabel}>80/120 mmHg</Text>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Respiratory Rate (X/min):</Text>
        <Text style={styles.recordLabel}>80/min</Text>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Blood Oxygen Level (X%):</Text>
        <Text style={styles.recordLabel}>80%</Text>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Heartbeat Rate (X/min):</Text>
        <Text style={styles.recordLabel}>80/min</Text>
      </View>
      <View style={styles.eachMedical}>
        <Text style={styles.label}>Record Summary:</Text>
        <Text style={styles.recordLabel}>
          Patient was fine. He had a bit good taste.
        </Text>
      </View>
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
