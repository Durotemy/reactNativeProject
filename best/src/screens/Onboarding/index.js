import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";
import * as authAction from "@Actions/authActions";
import PropTypes from "prop-types";

const Onboarding = ({ ...props }) => {
  const { updateOnboarding } = props;
  const navigation = useNavigation();

  const slides = [
    {
      key: 1,
      title: "Welcome to React Native News App.",
      text: "Here you can read latest news updates. By registering to this application.",
      image: require("@Asset/onboarding/frontal_home.png"),
    },
    {
      key: 2,
      title: "Read News",
      text: "Read news at anywhere at any place just by connecting to the internet.",
      image: require("@Asset/onboarding/doodle_reading.png"),
    },
    {
      key: 3,
      title: "Add to favorite.",
      text: "Add to your favorite read list and also you can add comments.",
      image: require("@Asset/onboarding/stting_on_floor.png"),
      backgroundColor: "#22bcb5",
    },
  ];
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View>
        <Icon name="arrowright" size={30} />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View>
        <Icon name="checkcircle" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View>
        <Text>Skip</Text>
      </View>
    );
  };

  const _onEndReached = () => {
    updateOnboarding(true);
    navigation.navigate("Login");
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      onDone={_onEndReached}
      onSkip={_onEndReached}
      dotClickEnabled={true}
      showNextButton={true}
      showDoneButton={true}
      showSkipButton={true}
    />
  );
};

Onboarding.propTypes = {
  isOnboardingDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isOnboardingDisabled: state.auth.isOnboardingDisabled,
    updateOnboarding: PropTypes.func.isRequired,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateOnboarding: (status) => dispatch(authAction.updateOnboarding(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
