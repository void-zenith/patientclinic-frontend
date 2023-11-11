import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
const ViewPatient = ({ route, navigation }) => {
  const { id } = route.params;

  const [patientData, setPatientData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const navigateToAddMedicalRecord = () => {
    navigation.navigate("Add Medical Record", {
      patientId: id,
    });
  };
  const navigateToViewMedicalRecord = (id) => {
    navigation.navigate("View Medical Record", {
      medicalId: id,
    });
  };

  useEffect(() => {
    getSinglePatient(id);
  }, []);
  const getSinglePatient = (id) => {
    fetch(`http://127.0.0.1:3000/patient/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.records.map);
        setPatientData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  const deleteSinglePatient = () => {
    fetch(`http://127.0.0.1:3000/patient/${id}`, {
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
    <View style={styles.viewPatientContainer}>
      {isLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <>
          <Text style={styles.mainHeading}>
            {patientData.firstName} {patientData.lastName}
          </Text>
          <Text style={styles.label}>Email: {patientData.email}</Text>
          <Text style={styles.label}>Address: {patientData.address}</Text>
          <TouchableOpacity
            style={styles.deleteUser}
            onPress={deleteSinglePatient}
          >
            <Text style={styles.deleteUserText}>Delete User</Text>
            <Icon name="deleteuser" size={24} color="#fff"></Icon>
          </TouchableOpacity>
        </>
      )}

      <View style={styles.recordContainer}>
        <View style={styles.addMedContainer}>
          <Text style={styles.subheading}>Medical Records</Text>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={navigateToAddMedicalRecord}
          >
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/* <Text>There are no records yet.</Text> */}
        {patientData.records &&
          patientData.records.map((item, id) => (
            <TouchableOpacity
              key={id}
              style={styles.eachRecord}
              onPress={() => navigateToViewMedicalRecord(item._id)}
            >
              <Text style={styles.eachRecordName}>{item.recordTitle}</Text>
              <Text>{item.date}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  deleteUser: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DA2C43",
    width: "40%",
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 14,
  },
  deleteUserText: {
    color: "#fff",
    fontSize: 16,
  },
  addBtn: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: "#368CE7",
    borderRadius: 10,
  },
  addBtnText: {
    color: "#fff",
    fontSize: 16,
  },
  addMedContainer: {
    marginVertical: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainHeading: { fontSize: 26, marginBottom: 10 },
  viewPatientContainer: {
    padding: 10,
  },
  recordContainer: {
    marginTop: 17,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  subheading: {
    fontSize: 20,
    marginBottom: 10,
  },
  eachRecord: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  eachRecordName: {
    fontSize: 17,
  },
});

export default ViewPatient;
