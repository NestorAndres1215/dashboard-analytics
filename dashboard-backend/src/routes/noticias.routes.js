const express = require("express");
const router = express.Router();
const noticiasController = require("../controllers/noticias.controller");

/**
 * @swagger
 * /noticias:
 *   get:
 *     summary: Obtener noticias por categoría
 *     parameters:
 *       - in: query
 *         name: categoria
 *         schema:
 *           type: string
 *         required: false
 *         description: Categoría de noticias
 *     responses:
 *       200:
 *         description: Lista de noticias
 */
router.get("/", noticiasController.getNoticias);

module.exports = router;
