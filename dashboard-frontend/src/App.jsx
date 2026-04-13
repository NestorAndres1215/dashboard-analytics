import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Layout/header/Header";
import Sidebar from "./components/Layout/sidebar/Sidebar";

export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          backgroundColor: "#f5f5f5",
          width: "100%",
        }}
      >
        <Header />

        <div style={{ marginTop: "64px", padding: "30px", width: "100%" }}>
          <AppRoutes />
        </div>
      </main>
    </div>
  );
}