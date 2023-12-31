import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// let persistor = persistStore(store);
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
