import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ isLogin }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("")

  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  return (
    <View>
      <Input
        label="Email"
        keyboardType="email-adress"
        onUpdateValue={updateInput.bind(this, "email")}
        value={enteredEmail}
      />
      <Input
        label="Password"
        secure
        keyboardType="email-adress"
        onUpdateValue={updateInput.bind(this, "password")}
        value={enteredPassword}
      />
      <View style={styles.buttons}>
        <Button>
          {isLogin ? "Login" : "Register"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons:{
    marginTop:10
  }
});
