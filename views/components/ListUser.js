import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const ListUser = ({ data, navigation }) => {
  const navigateToViewUser = (id) => {
    navigation.navigate("View User", {
      id: id,
    });
  };
  return (
    <TouchableOpacity
      style={styles.eachPatient}
      onPress={() => navigateToViewUser(data._id)}
    >
      <Text style={styles.eachPatientText}>{data.username}</Text>
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
  eachPatientText: {
    fontSize: 18,
  },
});

export default ListUser;
