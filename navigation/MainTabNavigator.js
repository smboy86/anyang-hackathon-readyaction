import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import FilterScreen from "../screens/FilterScreen";

import SeekWorkScreen from "../screens/SeekWorkScreen";
import SettingsScreen from "../screens/SettingsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Filter: FilterScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "구인",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-people" : "md-people"}
    />
  )
};

HomeStack.path = "";

const SeekWorkStack = createStackNavigator(
  {
    SeekWrok: SeekWorkScreen
  },
  config
);

SeekWorkStack.navigationOptions = {
  tabBarLabel: "구직",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-play" : "md-play"}
    />
  )
};

SeekWorkStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SeekWorkStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
