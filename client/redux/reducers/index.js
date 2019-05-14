import { combineReducers } from "redux";
import { coinReducer } from "./coin";
import { userReducer } from "./user";

export default combineReducers({ coin: coinReducer, user: userReducer });
