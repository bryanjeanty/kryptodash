import React, { Component } from "react";
import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { CMC_KEY } = publicRuntimeConfig;
const proxyUrl = "https://damp-cove-73616.herokuapp.com/";
const baseUrl = "https://pro-api.coinmarketcap.com";
const getCryptocurrency = "/v1/cryptocurrency/listings/latest";
const axiosConfig = {
  method: "get",
  baseURL: proxyUrl + baseUrl + getCryptocurrency,
  withCredentials: false,
  headers: {
    "X-CMC_PRO_API_KEY": CMC_KEY
  }
};

class Index extends Component {
  componentDidMount() {
    this.getCryptos();
  }

  getCryptos = async () => {
    try {
      const { data } = await axios.create(axiosConfig);
      console.log(data);
    } catch (error) {
      console.error("CMC fetch error", error);
    }
  };

  render() {
    return <div>Home Page</div>;
  }
}

export default Index;
