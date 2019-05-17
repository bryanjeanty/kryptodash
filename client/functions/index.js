import { axiosSession, axiosUser } from "../api/axios";
import fuzzy from "fuzzy";

// general function to get a specific user
export const getUser = async id => {
  const data = await axiosUser("get", `/${id}`);
  if (data) {
    return data;
  } else {
    return {};
  }
};

// pagination component
export const increaseUserCoinList = async id => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const userId = userData.split("%")[0];
    const data = await axiosUser("get", `/${userId}`);
    let coins;
    if (data) {
      coins = [...data.user.coins, id];
    }
    const response = await axiosUser("put", `/${userId}`, { coins });
    if (response) {
      return response;
    } else {
      return {};
    }
  } else {
    alert("Must Have An Account In Order To Add To Favorites!!");
    return {};
  }
};

// signin component
export const signinUser = async user => {
  const data = await axiosSession("post", "/signin", user);
  if (Object.keys(data).length !== 0) {
    const { user } = data;
    const userDataString = `${user._id}%${user.firstName}%${user.email}`;
    localStorage.setItem("userData", userDataString);
    return data;
  } else {
    return {};
  }
};

// signup component
export const signupUser = async user => {
  const data = await axiosUser("post", "/signup", user);
  if (data) {
    return data;
  } else {
    return {};
  }
};

// signout component
export const signoutUser = async () => {
  const data = await axiosSession("get", "/signout");
  if (data) {
    localStorage.clear();
    return data;
  } else {
    return {};
  }
};

// search results component
export const findMatches = (input, coins) => {
  if (input && coins) {
    const options = { extract: coin => coin.name };
    const results = fuzzy.filter(input, coins, options);
    const matches = results.map(result => result.original);
    return matches;
  } else {
    return [];
  }
};
