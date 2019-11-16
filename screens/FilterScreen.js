import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert
} from "react-native";

import {
  List,
  ListItem,
  Card,
  Slider,
  ButtonGroup,
  Button
} from "react-native-elements";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import styled from "styled-components";

export default function FilterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>필터</Text>
    </View>
  );
}

FilterScreen.navigationOptions = {
  title: "프로필 필터"
};
