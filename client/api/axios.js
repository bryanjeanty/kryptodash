import axios from "axios";
import {
  proxyEndpoint,
  cmcHost,
  serverHost,
  apiUsers,
  apiSession
} from "./url";
import { CMC_KEY } from "./env";

export const axiosCMC = async ({ path, query, offset } = {}) => {
  const newQuery = offset ? `?start=${offset}&limit=15` : query;
  const axiosOpts = {
    method: "get",
    url: proxyEndpoint + cmcHost + path + newQuery,
    withCredentials: false,
    headers: {
      "X-CMC_PRO_API_KEY": CMC_KEY
    }
  };

  try {
    const { data } = await axios(axiosOpts);
    console.log(data);
    return data;
  } catch (error) {
    console.error("API FETCH ERROR", error);
    return {};
  }
};

export const axiosUser = async (method, path, payload = {}) => {
  const axiosOpts = {
    method,
    url: serverHost + apiUsers + path,
    withCredentials: false,
    data: payload
  };

  try {
    const { data } = await axios(axiosOpts);
    return data;
  } catch (error) {
    console.error("USER FETCH ERROR", error);
    return {};
  }
};

export const axiosSession = async (method, path, payload = {}) => {
  const axiosOpts = {
    method,
    url: serverHost + apiSession + path,
    withCredentials: true,
    data: payload
  };

  try {
    const { data } = await axios(axiosOpts);
    console.log(data);
    return data;
  } catch (error) {
    console.error("SESSION FETCH ERROR", error);
    return {};
  }
};
