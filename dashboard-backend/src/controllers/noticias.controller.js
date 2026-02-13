const noticiasService = require("../services/noticias.service");

exports.getNoticias = async (req, res, next) => {
  try {
    const categoria = req.query.categoria || "general";
    const data = await noticiasService.getNoticias(categoria);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
