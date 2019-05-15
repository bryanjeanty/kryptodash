import { coinTypes } from "./types/coin";
import { getCMCCoins, decreaseUserCoinList } from "../../functions/dashboard";
import { getUser, increaseUserCoinList } from "../../functions/index";

export const requestCMCCoins = (offset = 0) => async dispatch => {
  dispatch({ type: coinTypes.FETCHING });
  const { data } = await getCMCCoins(offset);
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

export const deleteUserCoin = id => async dispatch => {
  dispatch({ type: coinTypes.FETCHING });
  const { data } = await decreaseUserCoinList(id);
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

export const addUserCoin = id => async dispatch => {
  dispatch({ type: coinTypes.FETCHING });
  const { data } = await increaseUserCoinList(id);
  if (data) {
    return dispatch({
      type: coinTypes.UPDATE_USER_COINS_SUCCESS,
      message: data.message,
      payload: data.user.coins
    });
  }
  return dispatch({
    typs: coinTypes.UPDATE_USER_COINS_ERROR,
    message: "User coin not added!"
  });
};
