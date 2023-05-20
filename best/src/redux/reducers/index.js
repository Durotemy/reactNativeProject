import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "@Constant";
import authReducer from "./authReducers";

const config = {
  key: Constants,
  storage: AsyncStorage,
  blacklist: [],
};

const appReducer = persistCombineReducers(config, {
  // your reducers
  auth: authReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
