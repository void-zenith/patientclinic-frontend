import React from "react";
import AppNavigator from "./app.navigator";
import Toast from "react-native-toast-message";
export default function App() {
  return (
    <>
      <Toast />
      <AppNavigator />
    </>
  );
}
