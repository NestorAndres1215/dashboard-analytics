import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled components for Material Design look
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3], // Elevation for Material Design
  backgroundColor: theme.palette.background.paper,
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[6], // Slightly higher elevation on hover
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  marginRight: theme.spacing(2),
  color: theme.palette.primary.main, // Use primary color for icon
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
}));

const ValueTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.secondary,
}));

export default function CustomCard({ title, value, icon }) {
  return (
    <StyledCard>
      <IconWrapper>{icon}</IconWrapper>
      <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 } }}>
        <TitleTypography variant="h6">{title}</TitleTypography>
        <ValueTypography variant="body1">{value}</ValueTypography>
      </CardContent>
    </StyledCard>
  );
}