import { createStore, combineReducers } from "redux";
import productReducer from "../reducers/products.reducers";
import productReducer from "../reducers/locations.reducers";

const rootReducer = combineReducers({
  productReducer: productReducer,
  locationReducer: locationReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;