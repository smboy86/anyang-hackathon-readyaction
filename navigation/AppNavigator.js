import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LoginScreen from "../screens/LoginScreen";
import MainTabNavigator from "./MainTabNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "Login"
    }
  )
);
