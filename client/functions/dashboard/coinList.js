import { cmcLatestPath, cmcLimitQuery } from "../../api/url";
import { axiosCMC, axiosSession } from "../../api/axios";

export const getCMCCoins = async () => {
  const { data } = await axiosCMC(cmcLatestPath, cmcLimitQuery);
  if (data) {
    return { data };
  } else {
    return;
  }
};

export const getUserCoins = async () => {
  const userData = localStorage.getItem("userData");
  let userId;
  if (userData) {
    userId = userData.split("%")[0];
  }
  const { data } = await axiosSession("get", `/users/${userId}`);
  if (data) {
    return { data };
  } else {
    return;
  }
};

export const removeUserCoin = async id => {
  const remove = confirm("Are you sure?");
  if (remove) {
    const userData = localStorage.getItem("userData");
    let userId;
    if (userData) {
      userId = userData.split("%")[0];
    }
    const { data } = await axiosSession("get", `/users/${userId}`);
    let coins;
    if (data) {
      coins = data.user.coins;
    }
    coins.splice(coins.indexOf(id), 1);
    const response = await axiosSession("put", `/users/${userId}`, { coins });
    if (response) {
      return response;
    } else {
      return;
    }
  } else {
    return;
  }
};
