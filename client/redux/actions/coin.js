import { coinTypes } from "./types/coin";
import {
  getCMCCoins,
  getUser,
  removeUserCoin
} from "../../functions/dashboard";

export const requestCMCCoins = () => async dispatch => {
  dispatch({ type: coinTypes.FETCHING });
  const { data } = await getCMCCoins();
  if (data) {
    return dispatch({
      type: coinTypes.GET_CMC_COINS_SUCCESS,
      message: data.message,
      payload: data
    });
  }
  return dispatch({
    type: coinTypes.GET_USER_COINS_ERROR,
    message: "No coins returned"
  });
};

export const requestUserCoins = () => async dispatch => {
  dispatch({ type: coinTypes.FETCHING });
  const { data } = await getUser();
  if (data) {
    return dispatch({
      type: coinTypes.GET_USER_COINS_SUCCESS,
      message: data.message,
      payload: data.user.coins
    });
  }
  return dispatch({
    type: coinTypes.GET_USER_COINS_ERROR,
    message: "No coins returned for user"
  });
};

export const deleteUserCoin = () => async (dispatch, id) => {
  dispatch({ type: coinTypes.FETCHING });
  const { data } = await removeUserCoin(id);
  if (data) {
    return dispatch({
      type: coinTypes.UPDATE_USER_COINS_SUCCESS,
      message: data.message,
      payload: data.user.coins
    });
  }
  return dispatch({
    typs: coinTypes.UPDATE_USER_COINS_ERROR,
    message: "User coin not removed!"
  });
};
