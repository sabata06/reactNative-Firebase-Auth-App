import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import Loading from "../components/Loading";
import { login } from "../utils/auth";

export default function LoginScreen() {
  const [isAuth, setIsAuth] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuth(true);

    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        "Login failed!",
        "Please check your information"
      );
    }
   
    setIsAuth(false);
  }

  if (isAuth) {
    return <Loading message={"Logging in..."} />;
  }

  return <AuthContent isLogin onAuthanticate={loginHandler} />;
}

const styles = StyleSheet.create({});
