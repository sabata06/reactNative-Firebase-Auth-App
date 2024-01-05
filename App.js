import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AuthContextProvider, { AuthContext } from "./context/authContext";
import { useContext } from "react";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blueviolet" },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: "User Login",
        }}
      />
      <Stack.Screen
        options={{
          headerTitle: "User Register",
        }}
        name="Signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}
function AfterAuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blueviolet" },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation(){
  const authContext =  useContext(AuthContext)
  return(
    <NavigationContainer>

      {!authContext.isAuthenticate &&  <NormalStack /> }
      {authContext.isAuthenticate &&  <AfterAuthStack /> }
       
      </NavigationContainer>
  )

}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation/>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
