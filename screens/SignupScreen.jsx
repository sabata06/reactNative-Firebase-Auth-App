import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../utils/auth";
import Loading from "../components/Loading";
import { AuthContext } from "../context/authContext";

export default function SignupScreen() {
  const authContext = useContext(AuthContext)
  const [isAuth, setIsAuth] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuth(true);

    try {
    const token = await createUser(email, password);
    authContext.authenticate(token)
    } catch (error) {
      Alert.alert(
        "Registration is not success!",
        "Please check your information"
      );
    }

    setIsAuth(false);
  }

  if (isAuth) {
    return <Loading message={"User is Creating..."} />;
  }

  return <AuthContent onAuthanticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
