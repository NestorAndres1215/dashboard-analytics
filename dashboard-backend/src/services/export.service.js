const PDFDocument = require("pdfkit");
const ExcelJS = require("exceljs");

exports.generatePDF = async () => {
  const doc = new PDFDocument();
  const buffers = [];

  doc.on("data", buffers.push.bind(buffers));
  doc.on("end", () => {});

  doc.text("Dashboard Analítica", { align: "center" });
  doc.text("Datos de Clima, Noticias, Criptos y Exchange", { align: "center" });

  doc.end();

  return new Promise((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(buffers)));
  });
};

exports.generateExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Dashboard");

  sheet.columns = [
    { header: "Sección", key: "seccion" },
    { header: "Dato", key: "dato" },
  ];

  sheet.addRow({ seccion: "Ejemplo", dato: "Datos de prueba" });

  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
};
