import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCloudSun,
  faCoins,
  faNewspaper,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    title: "Usuarios Activos",
    value: "1,245",
    icon: faUser,
    color: "#1976d2",
  },
  {
    title: "Ciudades con Clima",
    value: "15",
    icon: faCloudSun,
    color: "#0288d1",
  },
  {
    title: "Criptomonedas",
    value: "120+",
    icon: faCoins,
    color: "#fbc02d",
  },
  {
    title: "Noticias Publicadas",
    value: "350",
    icon: faNewspaper,
    color: "#e53935",
  },
  {
    title: "Tasa de Cambio",
    value: "Actualizada",
    icon: faDollarSign,
    color: "#43a047",
  },
];

const Dashboard = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* ===== Título del dashboard ===== */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <FontAwesomeIcon icon={faUser} color="#1976d2" />
        Panel de Control
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Bienvenido al panel principal. Aquí puedes ver un resumen general del
        sistema y acceder a distintas secciones.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* ===== Tarjetas de estadísticas ===== */}
      <Grid container spacing={3}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  py: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  style={{ color: item.color }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {item.title}
                </Typography>
                <Typography variant="h5" fontWeight="600" color="text.secondary">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
