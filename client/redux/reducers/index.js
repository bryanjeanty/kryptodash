import { combineReducers } from "redux";
import { coinReducer } from "./coin";
import { userReducer } from "./user";
import { pageReducer } from "./page";
import { searchReducer } from "./search";

export default combineReducers({
  coin: coinReducer,
  user: userReducer,
  page: pageReducer,
  search: searchReducer
});
