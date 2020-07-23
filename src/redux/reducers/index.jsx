import { combineReducers } from "redux";
import { reducerGoogleMap } from "../reducers/business/google.map.reducer";

const reducers = combineReducers({
  reducerGoogleMap: reducerGoogleMap,
});

export default reducers;
