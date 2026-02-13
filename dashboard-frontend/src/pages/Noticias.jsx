import React, { useState, useEffect } from "react";
import { getNoticias } from "../services/noticiasService";
import "../styles/Noticias.css";

// Material UI
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"; // 📰 ícono

const categoriaLabels = {
  general: "General",
  technology: "Tecnología",
  business: "Negocios",
  sports: "Deportes",
  science: "Ciencia",
  entertainment: "Entretenimiento",
};

export default function Noticias() {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNoticias = async () => {
      setLoading(true);
      try {
        const res = await getNoticias(categoria);
        setNoticias(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
        setNoticias([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNoticias();
  }, [categoria]);

  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      {/* ======= TÍTULO CON ICONO ======= */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{
          mb: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
        }}
      >
        <FontAwesomeIcon
          icon={faNewspaper}
          style={{ color: "#1976d2", fontSize: "1.8rem" }}
        />
        Noticias - {categoriaLabels[categoria] || categoria}
      </Typography>

      {/* ======= SELECT DE CATEGORÍAS ======= */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Categoría</InputLabel>
          <Select
            value={categoria}
            label="Categoría"
            onChange={(e) => setCategoria(e.target.value)}
          >
            {Object.keys(categoriaLabels).map((key) => (
              <MenuItem key={key} value={key}>
                {categoriaLabels[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* ======= CONTENIDO ======= */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="news-grid">
          {noticias.map((n, i) => (
            <div className="news-card" key={i}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                {n.urlToImage && (
                  <CardMedia
                    component="img"
                    height="180"
                    image={n.urlToImage}
                    alt={n.title}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {n.title}
                  </Typography>

                  {/* Solo mostrar descripción si existe */}
                  {n.description && (
                    <Typography variant="body2" color="text.secondary">
                      {n.description}
                    </Typography>
                  )}

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mt: 1 }}
                  >
                    {n.source?.name || "Fuente desconocida"}
                  </Typography>
                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: 10,
                      color: "#1976d2",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Leer más →
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </Box>
  );
}
