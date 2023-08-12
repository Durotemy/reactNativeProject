import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";
import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

export default Login = () => {
  const theme = useTheme();
  const {
    colors: { background, text, lightGray5, card, secondary, primary },
    dark,
  } = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.loginMain}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.signInText}>Sign in to access more details</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.wrapper}>
              <TextInput
                placeholder="Enter Name"
                // keyboardType="email-address"
                style={styles.input}
              />
            </View>
            <View style={styles.wrapper}>
              <TextInput
                placeholder="Enter email"
                keyboardType="email-address"
                style={styles.input}
              />
            </View>
            <View style={styles.wrapper}>
              <View style={styles.input}>
                <View style={styles.inputFieldContianer}>
                  <TextInput
                    placeholder="Enter password"
                    // keyboardType="password"
                    secureTextEntry={true}
                    style={{ height: scale(50), color: text, width: "93%" }}
                  />
                  <TouchableOpacity>
                    <Icon name="key" size={20} color={"grey"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnContainerText}>
              <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.footerContainerInner}>
              <Text style={styles.newUserText}>I am already a member</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signUp}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
