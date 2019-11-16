import React, { useEffect } from "react";
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

import { List, ListItem, Card } from "react-native-elements";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import styled from "styled-components";

import Swiper from "react-native-swiper";
import { Video } from "expo-av";
import { arrImgUrl } from "../constants/mockImages";
import { Slider, ButtonGroup, Button } from "react-native-elements";

const { width } = Dimensions.get("window");

const testImg = [
  "../assets/video/test.mp4",
  "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/a7dbe5cf-1c18-4252-92b5-cc70562c4864-bWFpbi1uLW4tMC0wLTAtOTYxLTEyMDA.jpg",
  "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/e17d3124-f660-45d1-9921-1faabfc7d702.jpg",
  "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/54e88f08-48d8-4913-aa0a-ca23f3dc9d51.jpg",
  "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/5c0dfe99-0613-4563-a9c8-10255deb638a.jpg"
];

const buttons = ["", "", ""];

const SwiperItem = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #000;
`;

const ContainerScrollView = styled.ScrollView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 10px 0;
`;

const SubInfoBox = styled.View`
  padding: 10px;
`;

const SubInfoText = styled.Text`
  font-size: 14px;
`;

const AbilityBox = styled.View`
  flex-direction: row;
`;

const AbilityLeftBox = styled.View`
  width: 25%;
`;

const AbilityRightBox = styled.View`
  width: 75%;
`;

const RoleBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const RoleTextBox = styled.View`
  width: 32%;
  margin-right: 4px;
  margin-bottom: 4px;
  border: 1px solid ${props => (props.color == "yes" ? "#A9F5BC" : "#e6e6e6")};
  background-color: ${props => (props.color == "yes" ? "#A9F5BC" : "#fff")};
`;

const RoleText = styled.Text`
  padding: 10px 12px;
`;

const BtnGroup = styled.View`
  padding-top: 20px;
  padding-bottom: 60px;
`;

export default function DetailScreen(props) {
  state = {
    refreshing: false
  };

  useEffect(() => {
    // console.log("DetailScreen", props);
    // console.log("DetailScreen", props.navigation.state.params.profileImage);
  }, []);

  _showAlert = text => {
    Alert.alert(
      "알림",
      text
      // [
      //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      //   {text: 'OK', onPress: () => console.log('OK Pressed')},
      // ],
      // { cancelable: false }
    );
  };

  return (
    <ContainerScrollView>
      {props.navigation.state.params.idxImage == 0 ? (
        <Swiper style={styles.wrapper} height={400} horizontal={false}>
          <SwiperItem>
            <Image
              style={{ width: width, height: 400 }}
              source={props.navigation.state.params.profileImage}
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              style={{ width: width, height: 400 }}
              source={{ uri: testImg[2] }}
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              style={{ width: width, height: 400 }}
              source={{ uri: testImg[3] }}
            />
          </SwiperItem>
        </Swiper>
      ) : (
        <Swiper style={styles.wrapper} height={400} horizontal={false}>
          <SwiperItem>
            <Image
              style={{ width: width, height: 400 }}
              source={props.navigation.state.params.profileImage}
            />
          </SwiperItem>
        </Swiper>
      )}

      <Container>
        <SubTitle>모습</SubTitle>
        <SubInfoBox>
          <SubInfoText>성별 : 여</SubInfoText>
          <SubInfoText>나이 : 24-33 </SubInfoText>
          <SubInfoText>키 : 160cm </SubInfoText>
          <SubInfoText>몸무게 : 57kg </SubInfoText>
          <SubInfoText>체형 : 슬림 </SubInfoText>
          <SubInfoText>헤어 : 애쉬컬러 염색</SubInfoText>
        </SubInfoBox>
        <SubTitle>능력</SubTitle>
        <AbilityBox>
          <AbilityLeftBox>
            <SubInfoText style={{ paddingTop: 4 }}>한국어</SubInfoText>
            <SubInfoText style={{ paddingTop: 14 }}>액션스킬</SubInfoText>
            <SubInfoText style={{ paddingTop: 16 }}>요가</SubInfoText>
            <SubInfoText style={{ paddingTop: 18 }}>노래</SubInfoText>
          </AbilityLeftBox>
          <AbilityRightBox>
            <ButtonGroup
              disabled
              selectedIndex={0}
              buttons={buttons}
              containerStyle={{ height: 26 }}
              buttonStyle={{ backgroundColor: "#e2e2e2" }}
            />
            <ButtonGroup
              disabled
              selectedIndex={1}
              buttons={buttons}
              containerStyle={{ height: 26 }}
              buttonStyle={{ backgroundColor: "#e2e2e2" }}
            />
            <ButtonGroup
              disabled
              selectedIndex={2}
              buttons={buttons}
              containerStyle={{ height: 26 }}
              buttonStyle={{ backgroundColor: "#e2e2e2" }}
            />
            <ButtonGroup
              disabled
              selectedIndex={0}
              buttons={buttons}
              containerStyle={{ height: 26 }}
              buttonStyle={{ backgroundColor: "#e2e2e2" }}
            />
          </AbilityRightBox>
        </AbilityBox>
        <SubTitle>역할</SubTitle>
        <RoleBox>
          <RoleTextBox color="yes">
            <RoleText>보조출연자</RoleText>
          </RoleTextBox>
          <RoleTextBox color="yes">
            <RoleText>촬영스탭</RoleText>
          </RoleTextBox>
          <RoleTextBox color="">
            <RoleText>CF모델</RoleText>
          </RoleTextBox>
          <RoleTextBox color="">
            <RoleText>주연배우</RoleText>
          </RoleTextBox>
          <RoleTextBox color="">
            <RoleText>조연배우</RoleText>
          </RoleTextBox>
          <RoleTextBox color="">
            <RoleText>영화배우</RoleText>
          </RoleTextBox>
        </RoleBox>
        <SubTitle>경력</SubTitle>
        <View>
          <Text>
            <Text numberOfLines={1} style={{ color: "#F78181" }}>
              하얀 거탑
            </Text>{" "}
            - 권순일 역 [TV 드라마] 2007.01 ~ 2007.03
          </Text>
        </View>
        <View>
          <Text>
            <Text numberOfLines={1} style={{ color: "#F78181" }}>
              이 산
            </Text>{" "}
            - 정조 내시 역 [TV 드라마] 2007.09 ~ 2008.06
          </Text>
        </View>
        <BtnGroup>
          <Button
            icon={
              <FontAwesome
                name="handshake-o"
                size={15}
                color="#BCA9F5"
                style={{ paddingLeft: 4, marginTop: 6 }}
              />
            }
            iconRight
            title="출연 제의하기"
            onPress={() => this._showAlert("출연 제의하기")}
            buttonStyle={{ backgroundColor: "#FFF" }}
            titleStyle={{ color: "#BCA9F5" }}
            buttonStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#BCA9F5",
              borderRadius: 10
            }}
            containerStyle={{ marginVertical: 10 }}
          />
          <Button
            onPress={() => this._showAlert("채팅하기")}
            icon={
              <FontAwesome
                name="mobile"
                size={20}
                color="#F5DA81"
                style={{ paddingLeft: 4, marginTop: 6 }}
              />
            }
            iconRight
            title="채팅하기"
            buttonStyle={{ backgroundColor: "#FFF" }}
            titleStyle={{ color: "#F5DA81" }}
            buttonStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#F5DA81",
              borderRadius: 10
            }}
          />
        </BtnGroup>
      </Container>
    </ContainerScrollView>
  );
}

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },

  image: {
    width,
    flex: 1
  }
};

DetailScreen.navigationOptions = {
  title: "프로필 상세보기"
};
