const exchangeService = require("../services/exchange.service");

exports.getExchange = async (req, res, next) => {
  try {
    const base = req.params.base;
    const data = await exchangeService.getExchange(base);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
