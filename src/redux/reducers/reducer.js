import { combineReducers } from "redux";
import { selectedCity } from "./SelectedCity.js";
import weatherInfo from "./weatherReducer.js";
import weatherFutureReducer from "./weatherFutureReducer.js";

// combine reducers
const reducers = combineReducers({
  weatherInfo, // conation list of all the weathers
  selectedCity,
  weatherFutureReducer,
});

export default reducers;
