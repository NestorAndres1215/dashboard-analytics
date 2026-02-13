import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Layout/header/Header";
import Sidebar from "./components/Layout/sidebar/Sidebar";

export default function App() {
  return (
    <div className="app-container" style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "30px", backgroundColor: "#f5f5f5" }}>
        <Header />
        <div style={{ marginTop: "64px" }}>
          <AppRoutes />
        </div>
      </main>
    </div>
  );
}