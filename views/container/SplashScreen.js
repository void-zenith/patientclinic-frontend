import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import background from "../../assets/Images/background.png";
import logo from "../../assets/Images/logo.png";
import ButtonComponent from "../components/ButtonComponent";
const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.splashContainer}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}></Image>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              label="Sign In"
              color="primary"
              size="w_80"
              onPressHandler={() => navigation.navigate("Login")}
            />
            <ButtonComponent
              label="Sign In as Admin"
              color="secondary"
              size="w_80"
              onPressHandler={() => navigation.navigate("Login Admin")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  splashContainer: { flex: 1 },
  image: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
  },
});
export default SplashScreen;
