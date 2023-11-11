import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import ListPatient from "../components/ListPatient";
const ViewAllPatient = ({ navigation }) => {
  const [allPatient, setAllPatient] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPatientData();
  }, []);
  const getPatientData = () => {
    fetch("http://127.0.0.1:3000/patient", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setAllPatient(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {loading ? (
          <ActivityIndicator></ActivityIndicator>
        ) : (
          <View style={styles.listContainer}>
            {allPatient.map((item, id) => (
              <ListPatient
                key={id}
                data={item}
                navigation={navigation}
              ></ListPatient>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  listContainer: {
    marginBottom: 10,
  },
});
export default ViewAllPatient;
