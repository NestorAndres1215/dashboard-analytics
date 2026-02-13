module.exports = {
  openWeather: {
    url: "https://api.openweathermap.org/data/2.5/weather",
    key: "ebe9d21a33b053849363872b2dd230c6",
  },
  newsApi: {
    url: "https://newsapi.org/v2/top-headlines",
    key: process.env.NEWSAPI_KEY,
  },
  coingecko: {
    url: "https://api.coingecko.com/api/v3",
  },
  exchangeRates: {
    url: "https://open.er-api.com/v6/latest", // ejemplo gratuito
    key: process.env.EXCHANGE_API_KEY,
  },
};
