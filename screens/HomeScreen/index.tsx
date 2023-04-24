import { Text, View, Button } from "react-native";
import React from "react";

//
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../typing";

const HomeScreen = () => {
  const nav = useNavigation<HomeScreenNavigationProp>();
  return (
    // @ts-ignore
    <View className="flex-1 items-center justify-center">
      <Text>HomeScreen</Text>
      <Button title="go to chat" onPress={() => nav.navigate("Chat")} />
    </View>
  );
};

export default HomeScreen;
