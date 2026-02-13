const criptoService = require("../services/cripto.service");

exports.getCripto = async (req, res, next) => {
  try {
    const moneda = req.params.moneda;
    const data = await criptoService.getCripto(moneda);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
