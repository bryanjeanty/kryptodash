import { userTypes } from "./types/user";
import { getUser } from "../../functions/dashboard";

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
    return dispatchEvent({
      type: userTypes.GET_USER_ERROR,
      message: "User not found"
    });
  }
};
