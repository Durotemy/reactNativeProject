import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { moderateScale } from "react-native-size-matters";
import Account from "@Screen/Account";
import Favourite from "@Screen/Favourite";
import Home from "@Screen/Home";
import Notifications from "@Screen/Notifications";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#062743",
        inactiveTintColor: "#9ea9b3",
        tabStyle: {
          marginVertical: moderateScale(10),
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={24} color={"black"}  />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="user"  size={24} color={"pink"} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favourite}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="heart" size={24} color={"green"} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="notification" size={24}  color={"red"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
