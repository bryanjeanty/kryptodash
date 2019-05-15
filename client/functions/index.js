import { axiosSession } from "../api/axios";

export const getUser = async () => {
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

export const increaseUserCoinList = async id => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const userId = userData.split("%")[0];
    const { data } = await axiosSession("get", `/users/${userId}`);
    let coins;
    if (data) {
      coins = [...data.user.coins, id];
    }
    const response = await axiosSession("put", `/users/${userId}`, { coins });
    if (response) {
      return response;
    } else {
      return;
    }
  } else {
    alert("Must Have An Account In Order To Add To Favorites!!");
  }
};
