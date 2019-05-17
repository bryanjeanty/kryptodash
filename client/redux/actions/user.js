import { userTypes } from "./types/user";
import {
  getUser,
  signinUser,
  signupUser,
  signoutUser
} from "../../functions/index";
import { updateUser, deleteUser } from "../../functions/settings";

export const requestUser = id => async dispatch => {
  dispatch({ type: userTypes.FETCHING_USER });
  const data = await getUser(id);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: userTypes.GET_USER_SUCCESS,
      message: data.message,
      payload: data.user
    });
  } else {
    return dispatch({
      type: userTypes.GET_USER_ERROR,
      message: "Error"
    });
  }
};

export const signin = user => async dispatch => {
  dispatch({ type: userTypes.FETCHING_USER });
  const data = await signinUser(user);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: userTypes.SIGNIN_USER_SUCCESS,
      message: data.message,
      payload: data.user
    });
  } else {
    return dispatch({
      type: userTypes.SIGNIN_USER_ERROR,
      message: "Error"
    });
  }
};

export const signup = user => async dispatch => {
  dispatch({ type: userTypes.FETCHING_USER });
  const data = await signupUser(user);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: userTypes.SIGNUP_USER_SUCCESS,
      message: data.message,
      payload: data.user
    });
  } else {
    return dispatch({
      type: userTypes.SIGNUP_USER_ERROR,
      message: "Error"
    });
  }
};

export const signout = () => async dispatch => {
  dispatch({ type: userTypes.FETCHING_USER });
  const data = await signoutUser();
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: userTypes.SIGNOUT_USER_SUCCESS,
      message: data.message
    });
  } else {
    return dispatch({
      type: userTypes.SIGNOUT_USER_ERROR,
      message: "Error"
    });
  }
};

export const update = user => async dispatch => {
  dispatch({ type: userTypes.FETCHING_USER });
  const data = await updateUser(user);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: userTypes.UPDATE_USER_SUCCESS,
      message: data.message,
      payload: data.user
    });
  } else {
    return dispatch({
      type: userTypes.UPDATE_USER_ERROR,
      message: "Error"
    });
  }
};

export const destroyUser = id => async dispatch => {
  dispatch({ type: userTypes.FETCHING_USER });
  const data = await deleteUser(id);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: userTypes.DELETE_USER_SUCCESS,
      message: data.message
    });
  } else {
    return dispatch({
      type: userTypes.DELETE_USER_ERROR,
      message: "Error"
    });
  }
};
