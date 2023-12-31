import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Logout from "react-native-vector-icons/MaterialIcons";
import ButtonComponent from "../components/ButtonComponent";
import ListPatient from "../components/ListPatient";
const HomeScreen = ({ navigation }) => {
  const limit = 0;
  const [normalPatient, setNormalPatient] = useState([]);
  const [criticalPatient, setCriticalPatient] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const NavigateToAddPatient = () => {
    navigation.navigate("Add Patient");
  };

  useEffect(() => {
    getPatientData();
    getCriticalPatient();
  }, []);
  const getPatientData = () => {
    fetch(`http://127.0.0.1:3000/patient?limit=${limit}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setNormalPatient(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const getCriticalPatient = () => {
    fetch(`http://127.0.0.1:3000/critical-patient?limit=${limit}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setCriticalPatient(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  const reload = () => {
    getPatientData();
    getCriticalPatient();
  };
  const logout = () => {
    navigation.navigate("Splash");
  };
  const navigateToAllPatient = () => {
    navigation.navigate("View All Patient");
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.homeContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome, Zenith</Text>
            <View style={styles.wlcBtnContainer}>
              <TouchableOpacity style={styles.reloadBtn} onPress={reload}>
                <Icon name="reload1" size={28}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
                <Logout name="logout" size={30}></Logout>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.summaryContainer}>
            <View style={styles.eachSummary}>
              <Text>Total Patient</Text>
              <Text style={styles.summaryValue}>{normalPatient.length}</Text>
              <TouchableOpacity
                style={styles.summaryBtn}
                onPress={navigateToAllPatient}
              >
                <Text style={styles.summaryBtnText}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.eachSummary}>
              <Text>Total Critical Patient</Text>
              <Text style={styles.summaryValue}>{criticalPatient.length}</Text>
              <TouchableOpacity
                style={styles.summaryBtn}
                onPress={navigateToAllPatient}
              >
                <Text style={styles.summaryBtnText}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <ButtonComponent
              color="primary"
              label="Add Patient"
              onPressHandler={NavigateToAddPatient}
            ></ButtonComponent>
          </View>
          <View>
            <Text style={styles.secondHeadLine}>List of Critical Patients</Text>
            {isLoading ? (
              <ActivityIndicator></ActivityIndicator>
            ) : (
              <View style={styles.listContainer}>
                {criticalPatient.map((item, id) => (
                  <ListPatient
                    data={item}
                    key={id}
                    navigation={navigation}
                  ></ListPatient>
                ))}
              </View>
            )}
            <Text style={{ marginBottom: 10, fontSize: 16 }}>
              {criticalPatient.length === 0 &&
                "There are no critical patients yet."}
            </Text>
            <ButtonComponent
              label="View All"
              color="primary"
              onPressHandler={navigateToAllPatient}
            ></ButtonComponent>
          </View>
          <View>
            <Text style={styles.secondHeadLine}>List of All Patients</Text>
            <Text style={{ fontSize: 16 }}>
              {normalPatient.length === 0 && "There are no patients yet."}
            </Text>
            <View style={styles.listContainer}>
              {isLoading ? (
                <ActivityIndicator></ActivityIndicator>
              ) : (
                <View style={styles.listContainer}>
                  {normalPatient.map((item, id) => (
                    <ListPatient
                      key={id}
                      data={item}
                      navigation={navigation}
                    ></ListPatient>
                  ))}
                </View>
              )}
            </View>
            <ButtonComponent
              label="View All"
              color="primary"
              onPressHandler={navigateToAllPatient}
            ></ButtonComponent>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoutBtn: {
    marginLeft: 10,
  },
  wlcBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listContainer: {
    marginBottom: 10,
  },
  homeContainer: {
    padding: 14,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "700",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  eachSummary: {
    flex: 1,
    minWidth: "48%",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginVertical: "1%",
    backgroundColor: "#368CE7",
    textAlign: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 14,
  },
  summaryValue: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
    marginTop: 10,
  },
  summaryBtn: {
    marginTop: 10,
  },
  summaryBtnText: {
    textTransform: "uppercase",
    color: "#fff",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  secondHeadLine: {
    fontSize: 20,
    marginBottom: 10,
  },
});
export default HomeScreen;
