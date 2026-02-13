const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dashboard Analítica API",
      version: "1.0.0",
      description: "API de dashboard para clima, noticias, criptos, exchange y exportación PDF/Excel",
    },
    servers: [
      { url: "http://localhost:5000/api" }
    ]
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = swaggerDocs;
