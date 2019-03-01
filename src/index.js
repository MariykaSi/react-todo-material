import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import i18n from "./i18n";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/global.scss";

import Home from "./pages/Home";
import { store, persistor } from "./configurationStore";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
