import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeWithDevTools = () => {
  const { composeWithDevTools } = require("redux-devtools-extension");
  return composeWithDevTools();
};

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
