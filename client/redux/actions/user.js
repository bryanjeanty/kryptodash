import { userTypes } from "./types/user";
import {
  getUser,
  signinUser,
  signupUser,
  signoutUser
} from "../../functions/index";
import { updateUser, deleteUser } from "../../functions/settings";

export const requestUser = () => async dispatch => {
  dispatch({ type: userTypes.FETCHING });
  const { data } = await getUser();
  if (data) {
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
  dispatch({ type: userTypes.FETCHING });
  const { data } = await signinUser(user);
  if (data) {
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
  dispatch({ type: userTypes.FETCHING });
  const { data } = await signupUser(user);
  if (data) {
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
  dispatch({ type: userTypes.FETCHING });
  const { data } = await signoutUser();
  if (data) {
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
  dispatch({ type: userTypes.FETCHING });
  const { data } = await updateUser(user);
  if (data) {
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

export const delete = () => async dispatch => {
  dispatch({ type: userTypes.FETCHING });
  const { data } = await deleteUser();
  if (data) {
    return dispatch({
      type: userTypes.DELETE_USER_SUCCESS,
      message: data.message
    })
  } else {
    return dispatch({
      type: userTypes.DELETE_USER_ERROR,
      message: 'Error'
    })
  }
}