import React, { useEffect } from "react";
import RootNavigation from "@Navigation";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./src/redux";

import EStyleSheet from "react-native-extended-stylesheet";

export const reduxPersistStore = persistStore(store);

const App = () => {
  useEffect(() => {
    EStyleSheet.build();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={reduxPersistStore}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
