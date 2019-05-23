import { axiosCMC, axiosUser } from "../api/axios";
import { cmcLatestPath, cmcLimitQuery } from "../api/url";

export const getCMCCoins = async (offset = 0) => {
  const data = await axiosCMC({
    path: cmcLatestPath,
    query: cmcLimitQuery,
    offset
  });
  if (data) {
    return data;
  } else {
    return {};
  }
};

export const decreaseUserCoinList = async symbol => {
  const remove = confirm("Are you sure?");
  if (remove) {
    const userData = localStorage.getItem("userData");
    let userId;
    if (userData) {
      userId = userData.split("%")[0];
    }
    const data = await axiosUser("get", `/${userId}`);
    let coins;
    if (data) {
      coins = data.user.coins;
    }
    coins.splice(coins.indexOf(symbol), 1);
    const response = await axiosUser("put", `/${userId}`, { coins });
    if (response) {
      return response;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
