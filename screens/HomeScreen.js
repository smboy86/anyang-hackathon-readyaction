import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { withNavigation } from "react-navigation";
import { List, ListItem, Card } from "react-native-elements";
import { randomUsers } from "./utils";
import styled from "styled-components";
import { AntDesign, Ionicons } from "@expo/vector-icons";

// 여자 사진
const testImg = [
  require("../assets/images/model/img_test.jpg"),
  "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/b3bc4266-10f3-45b2-8c38-ad7a78df0528.jpg",
  "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/b3bc4266-10f3-45b2-8c38-ad7a78df0528.jpg"
];

const arrImg = [
  require("../assets/images/model/img_1.jpg"),
  require("../assets/images/model/img_2.jpg"),
  require("../assets/images/model/img_3.jpg"),
  require("../assets/images/model/img_4.jpg"),
  require("../assets/images/model/img_5.jpg"),
  require("../assets/images/model/img_6.jpg"),
  require("../assets/images/model/img_7.jpg"),
  require("../assets/images/model/img_8.jpg"),
  require("../assets/images/model/img_9.jpg"),
  require("../assets/images/model/img_10.jpg"),
  require("../assets/images/model/img_11.jpg"),
  require("../assets/images/model/img_12.jpg"),
  require("../assets/images/model/img_13.jpg"),
  require("../assets/images/model/img_14.jpg"),
  require("../assets/images/model/img_15.jpg"),
  require("../assets/images/model/img_16.jpg")
];

const InputBox = styled.View`
  height: 48px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchTextInput = styled.TextInput`
  width: 100%;
  height: 48px;
  border: 1px solid #e6e6e6;
  padding-left: 18px;
  border-radius: 16px;
  background-color: #fff;
`;

const SearchIconBox = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 6%;
`;

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

const PInfoLeftBox = styled.View`
  width: 60%;
`;

const PInfoName = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const PInfoTagDetailBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4px;
`;
const PInfoLeftDetail = styled.TouchableOpacity`
  padding: 5px;
  /* border: 1px solid #e2e2e2; */
  border: 1px solid #e2e2e2;
  border-radius: 20px;
  margin-right: 6px;
  margin-bottom: 4px;
`;

const PInfoLeftText = styled.Text`
  font-size: 12px;
`;

const PInfoRightBox = styled.View`
  width: 40%;
`;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

// export function HomeScreen() {
const HomeScreen = ({ navigation }) => {
  state = {
    refreshing: false,
    data: randomUsers(20)
  };

  keyExtractor = (item, index) => index.toString();

  _moveDetail = () => {
    navigation.navigate("Detail");
  };

  _moveFilter = () => {
    navigation.navigate("Filter");
  };

  renderItem = ({ item, index, separators }) => (
    <ContainerCard
      onPress={() => {
        this._moveDetail();
      }}
    >
      {item.idx == 0 ? (
        <ProfileBox>
          <ProfileImg
            resizeMode="cover"
            resizeMethod="resize"
            source={testImg[0]}
          />
        </ProfileBox>
      ) : (
        <ProfileBox>
          <ProfileImg
            resizeMethod="resize"
            source={arrImg[getRandomInt(0, 15)]}
          />
          {/* <ProfileImg source={{ uri: testImg[getRandomInt(0, 3)] }} /> */}
          {/* <ProfileImg source={{ uri: testImg }} /> */}
        </ProfileBox>
      )}

      <ProfileInfoBox>
        <PInfoLeftBox>
          <PInfoName>{item.name}</PInfoName>
          <PInfoTagDetailBox>
            <PInfoLeftDetail>
              <PInfoLeftText>185cm</PInfoLeftText>
            </PInfoLeftDetail>
            <PInfoLeftDetail>
              <PInfoLeftText>79kg</PInfoLeftText>
            </PInfoLeftDetail>
            <PInfoLeftDetail>
              <PInfoLeftText>근육형</PInfoLeftText>
            </PInfoLeftDetail>
          </PInfoTagDetailBox>
        </PInfoLeftBox>
        <PInfoRightBox>
          <PInfoTagDetailBox>
            <PInfoLeftDetail color={"red"}>
              <PInfoLeftText>보조출연자</PInfoLeftText>
            </PInfoLeftDetail>
            <PInfoLeftDetail color={"blue"}>
              <PInfoLeftText>사극</PInfoLeftText>
            </PInfoLeftDetail>
            <PInfoLeftDetail color={"blue"}>
              <PInfoLeftText>현대극</PInfoLeftText>
            </PInfoLeftDetail>
          </PInfoTagDetailBox>
        </PInfoRightBox>
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
      <InputBox>
        <SearchTextInput
          onChangeText={text => text}
          placeholder="포졸 연기자"
          maxLength={18}
          onSubmitEditing={({ nativeEvent: { text } }) => console.log(text)}
          // onChangeText={text => onChangeSearchText(text)}
          // value={}
        ></SearchTextInput>
        <SearchIconBox onPress={() => this._moveFilter}>
          <Ionicons name="md-search" size={26} color="black" />
        </SearchIconBox>
      </InputBox>
      <FlatList
        style={{ marginTop: 20 }}
        initialNumToRender={20}
        keyExtractor={this.keyExtractor}
        data={this.state.data}
        renderItem={this.renderItem}
      />
    </ScrollView>
  );
};

export default HomeScreen;

HomeScreen.navigationOptions = {
  // header: null
  title: "레디액션",
  headerRight: (
    <View style={{ paddingRight: 10 }}>
      <AntDesign name="filter" size={24} color="black" />
    </View>
  )
};
