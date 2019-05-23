import { coinTypes } from "./types/coin";
import { getCMCCoins, decreaseUserCoinList } from "../../functions/dashboard";
import { getUser, increaseUserCoinList } from "../../functions/index";

export const requestCMCCoins = (offset = 0) => async dispatch => {
  dispatch({ type: coinTypes.FETCHING_COINS });
  const { data } = await getCMCCoins(offset);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: coinTypes.GET_CMC_COINS_SUCCESS,
      message: "Success",
      payload: data
    });
  }
  return dispatch({
    type: coinTypes.GET_USER_COINS_ERROR,
    message: "No coins returned"
  });
};

export const requestUserCoins = id => async dispatch => {
  dispatch({ type: coinTypes.FETCHING_COINS });
  const data = await getUser(id);
  if (Object.keys(data).length !== 0) {
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

export const deleteUserCoin = symbol => async dispatch => {
  dispatch({ type: coinTypes.FETCHING_COINS });
  const data = await decreaseUserCoinList(symbol);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: coinTypes.UPDATE_USER_COINS_SUCCESS,
      message: data.message,
      payload: data.user.coins
    });
  }
  return dispatch({
    type: coinTypes.UPDATE_USER_COINS_ERROR,
    message: "User coin not removed!"
  });
};

export const addUserCoin = symbol => async dispatch => {
  dispatch({ type: coinTypes.FETCHING_COINS });
  const data = await increaseUserCoinList(symbol);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: coinTypes.UPDATE_USER_COINS_SUCCESS,
      message: data.message,
      payload: data.user.coins
    });
  }
  return dispatch({
    type: coinTypes.UPDATE_USER_COINS_ERROR,
    message: "User coin not added!"
  });
};
