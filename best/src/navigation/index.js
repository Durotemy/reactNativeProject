import React, { useEffect } from "react";
import AuthStack from "@Navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "@Constant";
import axios from "axios";
import { BASE_URL } from "@Constant";

const RootNavigation = () => {
const setUrlConfig = () =>{
  console.log("called")
  axios.defaults.baseURL = BASE_URL;
}
useEffect(() => {
  setUrlConfig();
}, []);

  const { MyDarkTheme, MyLightTheme } = Constants;
  return (
    <NavigationContainer theme={MyLightTheme}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
