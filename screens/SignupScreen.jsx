import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../utils/auth";
import Loading from "../components/Loading";

export default function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuth(true);
    await createUser(email, password);
    setIsAuth(false);
  }

if(isAuth){
  return <Loading message={"User is Creating..."}/>
}

  return <AuthContent onAuthanticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
