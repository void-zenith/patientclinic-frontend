import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Text style={styles.welcomeText}>Welcome, Zenith</Text>
        <View style={styles.summaryContainer}>
          <View style={styles.eachSummary}>
            <Text>Total Patient</Text>
            <Text style={styles.summaryValue}>900</Text>
            <TouchableOpacity style={styles.summaryBtn}>
              <Text style={styles.summaryBtnText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.eachSummary}>
            <Text>Total Critical Patient</Text>
            <Text style={styles.summaryValue}>900</Text>
            <TouchableOpacity style={styles.summaryBtn}>
              <Text style={styles.summaryBtnText}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ButtonComponent
            color="primary"
            label="Add Patient"
          ></ButtonComponent>
        </View>
        <View>
          <Text style={styles.secondHeadLine}>List of Critical Patients</Text>
          <TouchableOpacity style={styles.eachPatient}>
            <Text style={styles.eachPatientText}>Patient 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.eachPatient}>
            <Text style={styles.eachPatientText}>Patient 1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
export default HomeScreen;
