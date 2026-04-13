import React from "react";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = ({ title, icon, color = "#1976d2" }) => {
  return (
    <Box
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 3,
        boxShadow: 2,
        border: "1px solid #e0e0e0",
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: 4,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(120deg, rgba(25,118,210,0.08), transparent)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "flex-start" },
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          gap: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        {icon && (
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              background: `linear-gradient(45deg, ${color}, #42a5f5)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 20,
            }}
          >
            <FontAwesomeIcon icon={icon} />
          </Box>
        )}

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(45deg, #1976d2, #0d47a1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            wordBreak: "break-word",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;