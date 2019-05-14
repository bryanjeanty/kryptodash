// IMPORT URLS
import axios from "axios";
// PUT API KEYS FROM NEXT CONFIG IN SEPARATE FILE
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { CMC_KEY } = publicRuntimeConfig;

const proxyUrl = "https://damp-cove-73616.herokuapp.com/";
const cmcUrl = "https://pro-api.coinmarketcap.com";

// PUT THIS BACK IN THE FUNCTION
const axiosConfig = {
  baseURL: proxyUrl + cmcUrl,
  withCredentials: false,
  headers: {
    "X-CMC_PRO_API_KEY": CMC_KEY
  }
};

export const axiosCMC = async (endpoint, query) => {
  try {
    const { data } = await axios.get(endpoint + query, axiosConfig);
    return data;
  } catch (error) {
    console.error("CMC Fetch Error", error);
    return {};
  }
};

// CREATE AXIOS USER FUNCTION

// CREATE AXIOS SESSION FUNCTION
