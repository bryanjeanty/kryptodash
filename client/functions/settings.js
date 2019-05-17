import { axiosUser } from "../api/axios";

export const updateUser = async user => {
  const userData = localStorage.getItem("userData");
  let userId;
  if (userData) {
    userId = userData.split("%")[0];
    const data = await axiosUser("put", `/${userId}`, user);
    if (data) {
      console.log(data);
      const userDataString = `${data.user._id}%${data.user.firstName}%${
        data.user.email
      }`;
      localStorage.setItem("userData", userDataString);
      return data;
    } else {
      return {};
    }
  }
  return {};
};

export const deleteUser = async () => {
  const userData = localStorage.getItem("userData");
  let userId;
  if (userData) {
    userId = userData.split("%")[0];
    const data = await axiosUser("delete", `/${userId}`);
    if (data) {
      localStorage.clear();
      return data;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
