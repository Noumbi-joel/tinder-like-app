import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackNavigatorParamList = {
  Home: undefined;
  Chat: undefined;
  Login: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackNavigatorParamList,
  "Details"
>;
