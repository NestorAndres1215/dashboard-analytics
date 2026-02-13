const express = require("express");
const router = express.Router();
const exportController = require("../controllers/export.controller");

/**
 * @swagger
 * /export/pdf:
 *   get:
 *     summary: Exportar datos a PDF
 *     responses:
 *       200:
 *         description: PDF generado
 */
router.get("/pdf", exportController.exportPDF);

/**
 * @swagger
 * /export/excel:
 *   get:
 *     summary: Exportar datos a Excel
 *     responses:
 *       200:
 *         description: Excel generado
 */
router.get("/excel", exportController.exportExcel);

module.exports = router;
