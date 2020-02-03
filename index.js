import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { addCoords } from "../../actions/locations.actions";
import configureStore from "./src/stores/store";

const store = configureStore();

const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const LogLocation = async (data) => {
  navigator.geolocation.getCurrentPosition((position) => {
    dispatch(addCoords(position))
  });
}

AppRegistry.registerComponent(appName, () => Redux);
AppRegistry.registerHeadlessTask('LogLocation', () => LogLocation);
