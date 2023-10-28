import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import SplashScreen from "./views/container/SplashScreen";
import Login from "./views/container/Login";
import HomeScreen from "./views/container/HomeScreen";
import AddPatient from "./views/container/AddPatient";
import LoginAdmin from "./views/container/LoginAdmin";
import ViewPatient from "./views/container/ViewPatient";
import AddMedicalRecord from "./views/container/AddMedicalRecord";
import ViewMedicalRecord from "./views/container/ViewMedicalRecord";
import ViewAllPatient from "./views/container/ViewAllPatient";
const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Back"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Text>Login as User</Text>,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Add Patient"
          component={AddPatient}
          options={{
            headerTitle: () => <Text>Add Patient</Text>,
          }}
        />
        <Stack.Screen
          name="View Patient"
          component={ViewPatient}
          options={{
            headerBackTitle: "Back",
            headerTitle: () => <Text>View Patient</Text>,
          }}
        />
        <Stack.Screen
          name="Add Medical Record"
          component={AddMedicalRecord}
          options={{
            headerBackTitle: "Back",
            headerTitle: () => <Text>Add Medical Record</Text>,
          }}
        />
        <Stack.Screen
          name="View Medical Record"
          component={ViewMedicalRecord}
          options={{
            headerBackTitle: "Back",
            headerTitle: () => <Text>View Medical Record</Text>,
          }}
        />
        <Stack.Screen
          name="View All Patient"
          component={ViewAllPatient}
          options={{
            headerBackTitle: "Back",
            headerTitle: () => <Text>List of patients</Text>,
          }}
        />
        <Stack.Screen
          name="Login Admin"
          component={LoginAdmin}
          options={{
            headerTitle: () => <Text>Login as Admin</Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
