const axios = require("axios");
const { newsApi } = require("../../config/apiConfig");

exports.getNoticias = async (categoria) => {
  const url = `${newsApi.url}?category=${categoria}&apiKey=${newsApi.key}&country=us`;
  const response = await axios.get(url);
  return response.data;
};
