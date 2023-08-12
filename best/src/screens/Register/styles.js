// import {Dimensions} from "react-native"
// import EStyleSheet from "react-native-extended-stylesheet";
// import { moderateScale } from "react-native-size-matters";

// export const style = (background,text,lightGray5,primary,dark) =>
//     EStyleSheet.create({
//     loginMain:{
//         flex: 1,
//         backgroundColor: 'black',
//         paddingLeft: moderateScale(20),
//         paddingRight: moderateScale(20)
//     }
// })

import { Platform } from "react-native";
import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { moderateScale, scale } from "react-native-size-matters";

export const styles = EStyleSheet.create({
  loginMain: {
    flex: 1,
    backgroundColor: "white",
    marginTop: "2rem",
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
  },
  header: {
    height: Dimensions.get("window").height / 4,
    justifyContent: "center",
    // backgroundColor: "red",
  },
  welcomeText: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "black",
  },
  signInText: {
    fontSize: moderateScale(15),
    color: "grey",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  wrapper: {
    marginTop: moderateScale(30),
  },
  input: {
    fontSize: moderateScale(15),
    color: "black",
    letterSpacing: 1,
    borderColor: "black",
    height: moderateScale(55),
    borderWidth: 1,
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
    fontWeight: "bold",
  },
  inputFieldContianer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgotPasswordContainer: {
    marginTop: moderateScale(10),
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "grey",
  },
  btnContainer: {
    // marginTop: moderateScale(30),
    // height: moderateScale(55),
    // backgroundColor: "black",
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: moderateScale(5),
    marginTop: 10,
  },
  btnContainerText: {
    marginTop: moderateScale(10),
    height: moderateScale(55),
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(10),
  },
  loginText: {
    fontSize: moderateScale(15),
    color: "white",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  footerContainer: {
    height: Dimensions.get("window").height / 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  footerContainerInner: {
    flexDirection: "row",
  },
  newUserText: {
    color: "grey",
    fontSize: moderateScale(15),
  },
  signUp: {
    color: "black",
    fontSize: moderateScale(15),
    fontWeight: "bold",
    marginLeft: moderateScale(5),
  },
  skip: {
    color: "grey",
    fontSize: moderateScale(15),
    fontWeight: "bold",
    marginTop: 10,
  },
});
