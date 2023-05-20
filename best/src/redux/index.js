// import { peristCombineReducers } from "redux-persist";
// import Constants from "@Constant";
// import AsyncStorage from "@react-native-community/async-storage";

// const config = {
//   key: Constants.asyncStorageKey,
//   storage: AsyncStorage,
//   blacklist: [],
// };

// const appReducer = peristCombineReducers(config, {

// });

// const rootReducer = (state, action) => {
//   return appReducer(state, action);
// };

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { compose, applyMiddleware } from 'redux';
// import thunk from "redux-thunk"
// import rootReducer from "@Reducer";
// import promiseMiddleware from "../middleware/Apicall";

// let middleware = [thunk,promiseMiddleware]

// const store = configureStore({
//   reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
//     compose(
//         applyMiddleware(...middleware),
//     )

// });

// export default store;


// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import rootReducer from "@Reducer";
// import promiseMiddleware from "../middleware/Apicall";

// const middleware = [promiseMiddleware, thunk];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware().concat(middleware),
//   enhancers: [compose],
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "@Reducer";
import promiseMiddleware from "./middleware/Apicall";

const middleware = [promiseMiddleware, thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;