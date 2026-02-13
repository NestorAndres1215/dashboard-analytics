const axios = require("axios");
const { coingecko } = require("../../config/apiConfig");

exports.getCripto = async (moneda) => {
  const url = `${coingecko.url}/coins/markets?vs_currency=usd&ids=${moneda}`;
  const response = await axios.get(url);
  return response.data;
};
