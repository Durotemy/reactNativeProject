import React, { useEffect } from "react";
import AuthStack from "@Navigation/AuthStack";
import { NavigationContainer } from '@react-navigation/native';
import Constants from "@Constant"


const RootNavigation = () => {

  const {MyDarkTheme,MyLightTheme} =Constants
  return (
    <NavigationContainer theme={MyLightTheme}>
      <AuthStack />
    </NavigationContainer>
  );
}; 

export default RootNavigation;
