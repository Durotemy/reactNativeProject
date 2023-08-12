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
import * as yup from "yup";
import { Formik, Field } from "formik";

const signInValidationSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
};

export default Login = () => {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.loginMain}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.signInText}>Sign in to access more details</Text>
        </View>
        <View style={styles.formContainer}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signInValidationSchema}
            onSubmit={(value) => {
              console.log("handleSubmit called");
              console.log(value);
            }}
          >
            {({
              handleSubmit,
              isValid,
              values,
              errors,
              handleChange,
              touched,
            }) => (
              <View style={styles.inputContainer}>
                <View style={styles.wrapper}>
                  <TextInput
                    placeholder="Enter email"
                    style={styles.input}
                    name="email"
                    onChangeText={handleChange("email")}
                  />
                </View>
                <View style={styles.wrapper}>
                  <View style={styles.input}>
                    <View style={styles.inputFieldContianer}>
                      <TextInput
                        placeholder="Enter password"
                        secureTextEntry={true}
                        name="password"
                        style={{
                          height: scale(50),
                          color: text,
                          width: "93%",
                        }}
                        onChangeText={handleChange("password")}
                      />
                      <TouchableOpacity>
                        <Icon name="key" size={20} color={"grey"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.forgotPasswordContainer}>
                  <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    style={styles.btnContainerText}
                    onPress={() => {
                      console.log("Button pressed");
                      handleSubmit(); // Calling handleSubmit here
                    }}
                  >
                    <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>

          <>
            <View style={styles.footerContainer}>
              <View style={styles.footerContainerInner}>
                <Text style={styles.newUserText}>I am a new User</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={styles.signUp}>Sign up</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text style={styles.skip}>Skip</Text>
              </TouchableOpacity>
            </View>
          </>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
