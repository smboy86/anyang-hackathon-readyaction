import React, { useState } from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const DetailChatScreen = () => {
  const [chatNo, setChatNo] = useState("1");

  return (
    <>
      <View>
        <Text>채팅 컴포넌트</Text>
      </View>
    </>
  );
};

export default DetailChatScreen;
