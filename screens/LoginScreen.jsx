import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import AuthContent from "../components/AuthContent";
import Loading from "../components/Loading";
import { login } from "../utils/auth";
import { AuthContext } from "../context/authContext";

export default function LoginScreen() {
  const authContext = useContext(AuthContext)
  const [isAuth, setIsAuth] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuth(true);

    try {
      const token = await login(email, password);
      authContext.authenticate(token)
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
