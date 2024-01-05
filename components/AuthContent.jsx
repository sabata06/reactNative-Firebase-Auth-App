import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export default function AuthContent({ isLogin }) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const navigation = useNavigation();

  function submitHandler(credentials) {
    console.log(credentials);
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();
    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 8;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Oops!", "Please check your entered email or password");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual
      })
      return;
    }
  }

  const switchScreen = () => {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <AuthForm onSubmit={submitHandler} isLogin={isLogin} credentialsInvalid={credentialsInvalid} />
      <View>
        <ButtonWhite onPress={switchScreen}>
          {isLogin ? "Create New User" : "Sign In"}
        </ButtonWhite>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blueviolet",
    marginTop: 50,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
