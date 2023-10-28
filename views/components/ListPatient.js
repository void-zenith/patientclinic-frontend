import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const ListPatient = ({ data, navigation }) => {
  const navigateToViewPatient = (id) => {
    navigation.navigate("View Patient", {
      id: id,
    });
  };
  return (
    <TouchableOpacity
      style={[styles.eachPatient, data.isCritical && styles.criticalPatient]}
      onPress={() => navigateToViewPatient(data._id)}
    >
      <Text style={styles.eachPatientText}>
        {data.firstName} {data.lastName}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  eachPatient: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderRadius: 14,
    marginVertical: "1%",
  },
  criticalPatient: {
    borderWidth: 1.5,
    backgroundColor: "#DA2C4318",
    borderColor: "#DA2C43",
  },
  eachPatientText: {
    fontSize: 18,
  },
});

export default ListPatient;
