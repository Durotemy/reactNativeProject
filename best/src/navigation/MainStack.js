import React from "react";
import Splash from "@Screens/Splash";
import Tabs from "./Tabs";
import NewsDetails from "@Screens/NewsDetails";
import Category from "@Screens/Category";
import About from "@Screen/About";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="About" component={About} />

    </Stack.Navigator>
  );
};

export default MainStack;
