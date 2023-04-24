import * as React from "react";

// r nav lib
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// screens
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ChatScreen from "../screens/ChatScreen";
// types
import { StackNavigatorParamList } from "../typing";

// hook
import useAuth, { AuthProvider } from "../hooks/useAuth";

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

const RootNavigator = () => {
  const user = false;
  const value = useAuth();
  console.log(value)
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Chat" component={ChatScreen} />
            </>
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default RootNavigator;
