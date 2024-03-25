import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import dotenv from "dotenv";
// dotenv.config();

import { GoogleOAuthProvider } from "@react-oauth/google";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //     <App />
  // </React.StrictMode>

  <GoogleOAuthProvider clientId="684915835438-f4evr0o58eirlqtuooo67hoktq6visno.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
