import React, { useState, useEffect } from "react";
import { getClima } from "../services/climaService";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSun,
  faTemperatureHigh,
  faDroplet,
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Clima() {
  const [ciudad, setCiudad] = useState("Lima");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchClima = async (nombreCiudad) => {
    setLoading(true);
    setError("");
    try {
      const res = await getClima(nombreCiudad);
      if (res && res.main) {
        setData(res);
      } else {
        setError("No se encontró información para esa ciudad.");
      }
    } catch (err) {
      setError("Error al obtener el clima. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClima(ciudad);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() !== "") fetchClima(ciudad);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        px: 2,
      }}
    >
      {/* ====== TÍTULO ====== */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <FontAwesomeIcon icon={faCloudSun} color="#1976d2" />
        Clima Actual
      </Typography>

      {/* ====== FORMULARIO DE BÚSQUEDA ====== */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 2,
          mb: 4,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Ciudad"
          variant="outlined"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        >
          Buscar
        </Button>
      </Box>

      {/* ====== CONTENIDO ====== */}
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      ) : data ? (
        <Card
          sx={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 3,
            boxShadow: 4,
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(25,118,210,0.9), rgba(100,181,246,0.9))",
            color: "white",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ display: "flex", justifyContent: "center", gap: 1 }}
            >
              <FontAwesomeIcon icon={faLocationDot} />
              {data.name}
            </Typography>

            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", my: 1 }}
            >
              {Math.round(data.main.temp)}°C
            </Typography>

            <Typography variant="h6" sx={{ mb: 2 }}>
              {data.weather[0].description.charAt(0).toUpperCase() +
                data.weather[0].description.slice(1)}
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
              <Typography variant="body1">
                <FontAwesomeIcon icon={faTemperatureHigh} />{" "}
                {Math.round(data.main.feels_like)}°C
              </Typography>
              <Typography variant="body1">
                <FontAwesomeIcon icon={faDroplet} /> {data.main.humidity}%
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1" sx={{ mt: 2 }}>
          Ingresa una ciudad para consultar el clima.
        </Typography>
      )}
    </Box>
  );
}
