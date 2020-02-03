import { ADD_COORDS } from "../actions/types";
import { AsyncStorage } from "react-native";

const initialState = {
  coordsList: []
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COORDS:
      return {
        ...state,
        coordsList: state.coordsList.concat({
          key: Math.random(),
          location: action.data
        })
      };
    default:
      return state;
  }
};

export default locationReducer;
