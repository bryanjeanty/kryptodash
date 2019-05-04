import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { CMC_KEY } = publicRuntimeConfig;

export const axiosCMC = async (endpoint, query) => {
  const proxyUrl = "https://damp-cove-73616.herokuapp.com/";
  const cmcUrl = "https://pro-api.coinmarketcap.com";
  const axiosConfig = {
    baseURL: proxyUrl + cmcUrl,
    withCredentials: false,
    headers: {
      "X-CMC_PRO_API_KEY": CMC_KEY
    }
  };

  try {
    const { data } = await axios.get(endpoint + query, axiosConfig);
    console.log(data);
    return data;
  } catch (error) {
    console.error("CMC fetch error", error);
    return {};
  }
};
