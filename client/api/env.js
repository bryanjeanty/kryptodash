import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
export const { CMC_KEY, CRYPTO_KEY } = publicRuntimeConfig;
