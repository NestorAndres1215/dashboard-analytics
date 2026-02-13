const exportService = require("../services/export.service");

exports.exportPDF = async (req, res, next) => {
  try {
    const pdfBuffer = await exportService.generatePDF();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=dashboard.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    next(error);
  }
};

exports.exportExcel = async (req, res, next) => {
  try {
    const excelBuffer = await exportService.generateExcel();
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", "attachment; filename=dashboard.xlsx");
    res.send(excelBuffer);
  } catch (error) {
    next(error);
  }
};
