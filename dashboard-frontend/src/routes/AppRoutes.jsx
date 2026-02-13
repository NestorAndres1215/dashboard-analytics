import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Clima from "../pages/Clima";
import Noticias from "../pages/Noticias";
import Cripto from "../pages/Cripto";
import Exchange from "../pages/Exchange";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clima" element={<Clima />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/cripto" element={<Cripto />} />
      <Route path="/exchange" element={<Exchange />} />
    </Routes>
  );
}
