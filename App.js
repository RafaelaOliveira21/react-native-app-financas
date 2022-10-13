import React from "react";
import Home from "./src/pages/Home";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0080E0" />
      <Routes />
    </NavigationContainer>  
  );
}

