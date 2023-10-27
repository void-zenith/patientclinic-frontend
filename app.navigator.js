import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import SplashScreen from "./views/container/SplashScreen";
import Login from "./views/container/Login";
import HomeScreen from "./views/container/HomeScreen";
import AddPatient from "./views/container/AddPatient";
const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
