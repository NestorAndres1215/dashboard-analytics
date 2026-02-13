const axios = require("axios");
const { exchangeRates } = require("../../config/apiConfig");

exports.getExchange = async (base) => {
  const url = `${exchangeRates.url}/${base}`;
  const response = await axios.get(url);
  return response.data;
};
