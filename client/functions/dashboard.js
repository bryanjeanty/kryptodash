import { axiosCMC, axiosSession } from "../api/axios";
import { cmcLatestPath, cmcLimitQuery } from "../api/url";

export const getCMCCoins = async (offset = 0) => {
  const { data } = await axiosCMC({
    path: cmcLatestPath,
    query: cmcLimitQuery,
    offset
  });
  if (data) {
    return { data };
  } else {
    return;
  }
};

export const decreaseUserCoinList = async id => {
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
