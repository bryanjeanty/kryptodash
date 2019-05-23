require("dotenv").config();

module.exports = {
  publicRuntimeConfig: {
    CMC_KEY: process.env.CMC_KEY,
    CRYPTO_KEY: process.env.CRYPTO_KEY
  }
};
