const express = require("express");
const router = express.Router();
const criptoController = require("../controllers/cripto.controller");

/**
 * @swagger
 * /cripto/{moneda}:
 *   get:
 *     summary: Obtener datos de criptomoneda
 *     parameters:
 *       - in: path
 *         name: moneda
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la criptomoneda
 *     responses:
 *       200:
 *         description: Datos de la criptomoneda
 */
router.get("/:moneda", criptoController.getCripto);

module.exports = router;
