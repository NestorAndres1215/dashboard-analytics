const climaService = require("../services/clima.service");

exports.getClima = async (req, res, next) => {
  try {
    const ciudad = req.params.ciudad;
    const data = await climaService.getClima(ciudad);
    res.json(data);
  } catch (error) {
    console.log(error)
    next(error);
  }
};
