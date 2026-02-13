const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const swaggerDocs = require("./config/swagger");

// Importar rutas
const climaRoutes = require("./src/routes/clima.routes");
const noticiasRoutes = require("./src/routes/noticias.routes");
const criptoRoutes = require("./src/routes/cripto.routes");
const exchangeRoutes = require("./src/routes/exchange.routes");
const exportRoutes = require("./src/routes/export.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas
app.use("/api/clima", climaRoutes);
app.use("/api/noticias", noticiasRoutes);
app.use("/api/cripto", criptoRoutes);
app.use("/api/exchange", exchangeRoutes);
app.use("/api/export", exportRoutes);

// Swagger
swaggerDocs(app);

// Middleware de errores
const errorHandler = require("./src/middlewares/errorHandler");
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
