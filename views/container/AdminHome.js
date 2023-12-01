import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import Icon from "react-native-vector-icons/AntDesign";
import ListUser from "../components/ListUser";
import Logout from "react-native-vector-icons/MaterialIcons";

const AdminHome = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
    fetch(`http://127.0.0.1:3000/user`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const reload = () => {
    getUserData();
  };
  const logout = () => {
    navigation.navigate("Splash");
  };

  const navigateToAdduser = () => {
    navigation.navigate("Add User");
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.homeContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome, Admin</Text>
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
              <Text>Total User</Text>
              <Text style={styles.summaryValue}>{userData.length}</Text>
            </View>
          </View>
          <ButtonComponent
            label="Add User"
            color="primary"
            onPressHandler={navigateToAdduser}
          ></ButtonComponent>
          <Text style={styles.secondHeadLine}>List of User:</Text>
          <View style={styles.listContainer}>
            {isLoading ? (
              <ActivityIndicator></ActivityIndicator>
            ) : (
              <View style={styles.listContainer}>
                {userData.map((item, id) => (
                  <ListUser
                    key={id}
                    data={item}
                    navigation={navigation}
                  ></ListUser>
                ))}
              </View>
            )}
            <Text style={{ marginBottom: 10, fontSize: 16 }}>
              {userData.length === 0 && "There are no users yet."}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    padding: 14,
  },
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
  welcomeText: {
    fontSize: 24,
    fontWeight: "700",
  },
  secondHeadLine: {
    fontSize: 20,
    marginBottom: 10,
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
});
export default AdminHome;
