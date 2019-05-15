import { axiosSession } from "../api/axios";

export const updateUser = async user => {
  const userData = localStorage.getItem("userData");
  let userId;
  if (userData) {
    userId = userData.split("%")[0];
    const { data } = await axiosSession("put", `/users/${userId}`, user);
    if (data) {
      const userDataString = `${data.user._id}%${data.user.firstName}%${
        data.user.email
      }`;
      localStorage.setItem("userData", userDataString);
      return { data };
    } else {
      return;
    }
  }
  return;
};

export const deleteUser = async () => {
  const userData = localStorage.getItem("userData");
  let userId;
  if (userData) {
    userId = userData.split("%")[0];
    const { data } = await axiosSession("delete", `/users/${userId}`);
    if (data) {
      localStorage.clear();
      return { data };
    } else {
      return;
    }
  } else {
    return;
  }
};
