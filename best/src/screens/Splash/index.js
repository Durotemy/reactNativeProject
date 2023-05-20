import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const Splash = () => {
  const [isVisible, setIsvisible] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();

  const { background, dark } = theme;

  const hideSplashScreen = () => {
    setIsvisible(false);
  };
  useEffect(() => {
    setTimeout(() => {
      hideSplashScreen;
      navigation.navigate("Tab");
    }, 2000);
  }, []);

  const renderSplash = () => {
    return (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={
              dark
                ? require("@Asset/splash_icon_light.png")
                : require("@Asset/splash_icon_dark.png")
            }
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.MainContainer}>
      {isVisible === true ? renderSplash() : null}
    </View>
  );
};

export default Splash;
