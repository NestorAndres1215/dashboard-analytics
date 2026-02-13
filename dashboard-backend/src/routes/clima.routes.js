const express = require("express");
const router = express.Router();
const climaController = require("../controllers/clima.controller");

/**
 * @swagger
 * /clima/{ciudad}:
 *   get:
 *     summary: Obtener clima de una ciudad
 *     parameters:
 *       - in: path
 *         name: ciudad
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la ciudad
 *     responses:
 *       200:
 *         description: Datos del clima
 */
router.get("/:ciudad", climaController.getClima);

module.exports = router;
