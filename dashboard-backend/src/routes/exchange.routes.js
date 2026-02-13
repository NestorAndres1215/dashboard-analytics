const express = require("express");
const router = express.Router();
const exchangeController = require("../controllers/exchange.controller");

/**
 * @swagger
 * /exchange/{base}:
 *   get:
 *     summary: Obtener tipos de cambio de una moneda base
 *     parameters:
 *       - in: path
 *         name: base
 *         schema:
 *           type: string
 *         required: true
 *         description: "Moneda base (ej: USD)"
 *     responses:
 *       200:
 *         description: Lista de tipos de cambio
 */

router.get("/:base", exchangeController.getExchange);

module.exports = router;
