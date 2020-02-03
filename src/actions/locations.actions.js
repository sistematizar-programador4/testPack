import { ADD_COORDS } from "./types";

export const addCoords = coords => ({
  type: ADD_COORDS,
  data: coords
});