import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function SeekWorkScreen() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>구직</Text>
    </View>
  );
}

SeekWorkScreen.navigationOptions = {
  title: "구직"
};
