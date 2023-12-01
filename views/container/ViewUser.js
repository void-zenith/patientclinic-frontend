import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const ViewUser = ({ route, navigation }) => {
  const { id } = route.params;

  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getSingleUser(id);
  }, []);
  const getSingleUser = (id) => {
    fetch(`http://127.0.0.1:3000/user/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.records.map);
        setUserData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  const deleteSingleUser = () => {
    fetch(`http://127.0.0.1:3000/user/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate("Admin");
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
          <Text style={styles.label}>username: {userData.username}</Text>
          <Text style={styles.label}>password: {userData.password}</Text>
          <TouchableOpacity
            style={styles.deleteUser}
            onPress={deleteSingleUser}
          >
            <Text style={styles.deleteUserText}>Delete User</Text>
            <Icon name="deleteuser" size={24} color="#fff"></Icon>
          </TouchableOpacity>
        </>
      )}
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

export default ViewUser;
