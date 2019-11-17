import React, { useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import styled from "styled-components";
import { randomUsers } from "./utils";
import { FontAwesome } from "@expo/vector-icons";

import { testComImg, testComName } from "../constants/mockCompany";

const ContainerCard = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 20px 10px 20px;
  background-color: #fff;
  border-radius: 16px;
  margin-bottom: 10px;
`;

const ProfileBox = styled.View`
  position: relative;
  margin-bottom: 4px;
`;

const ProfileImg = styled.Image`
  flex: 1;
  border-radius: 10px;
  width: 100%;
  height: 230px;
  justify-content: flex-start;
`;

const ProfileInfoBox = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
`;

const CompanyBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ComName = styled.Text`
  padding-left: 8px;
`;

export default function SeekWorkScreen() {
  const [data, setData] = useState(randomUsers(3));

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index, separators }) => (
    <ContainerCard
      onPress={() => {
        console.log("asdf");
      }}
    >
      <ProfileBox>
        <ProfileImg
          resizeMethod="resize"
          source={testComImg[index]}
          style={{
            resizeMode: "contain"
          }}
        />
      </ProfileBox>
      <ProfileInfoBox>
        <CompanyBox>
          <FontAwesome name="building-o" size={16} />
          <ComName>{testComName[index]}</ComName>
        </CompanyBox>
      </ProfileInfoBox>
    </ContainerCard>
  );

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 10,
        backgroundColor: "#e2e2e2"
      }}
    >
      <FlatList
        style={{ marginTop: 20 }}
        initialNumToRender={3}
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />
    </ScrollView>
  );
}

SeekWorkScreen.navigationOptions = {
  title: "구직"
};
