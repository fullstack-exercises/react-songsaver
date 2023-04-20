import SongReducer from "./Song";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  song: SongReducer,
});

export default allReducers;
