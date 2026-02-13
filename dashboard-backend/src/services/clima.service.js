const axios = require("axios");
const { openWeather } = require("../../config/apiConfig");

exports.getClima = async (ciudad) => {
  const url = `${openWeather.url}?q=${ciudad}&appid=ebe9d21a33b053849363872b2dd230c6&units=metric`;
  const response = await axios.get(url);
  return response.data;
};
