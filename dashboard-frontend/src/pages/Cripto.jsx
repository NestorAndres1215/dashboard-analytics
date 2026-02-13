import React, { useState, useEffect } from "react";
import { getCripto } from "../services/criptoService";
import Card from "../components/UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCoins } from "@fortawesome/free-solid-svg-icons";

export default function Cripto() {
  const [monedaInput, setMonedaInput] = useState(""); // input del usuario
  const [vsInput, setVsInput] = useState(""); // moneda de referencia input
  const [moneda, setMoneda] = useState(""); // moneda a consultar
  const [vs, setVs] = useState(""); // moneda de referencia
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!moneda || !vs) return;

    const fetchCripto = async () => {
      setLoading(true);
      try {
        const res = await getCripto(moneda, vs);
        setData(res);
      } catch (error) {
        console.error(error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCripto();
  }, [moneda, vs]);

  const handleSearch = () => {
    if (!monedaInput || !vsInput) return;
    setMoneda(monedaInput.toLowerCase());
    setVs(vsInput.toLowerCase());
  };

  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faCoins} /> Criptomonedas
      </h1>

      {/* Inputs de búsqueda */}
      <div style={{ display: "flex", gap: "10px", margin: "10px 0", flexWrap: "wrap" }}>
        <input
          value={monedaInput}
          onChange={(e) => setMonedaInput(e.target.value)}
          placeholder="Ej: bitcoin"
          style={{ flex: 1, padding: "8px 12px", borderRadius: "5px", border: "1px solid #ccc" }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <input
          value={vsInput}
          onChange={(e) => setVsInput(e.target.value)}
          placeholder="Ej: usd, pen"
          style={{ flex: 1, padding: "8px 12px", borderRadius: "5px", border: "1px solid #ccc" }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "8px 12px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#3aafa9",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faSearch} /> Buscar
        </button>
      </div>

      {/* Resultados */}
      {loading && <p>Cargando...</p>}

      {data.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              value={`${item.current_price} ${vs.toUpperCase()}`}
              extra={`Market Cap: ${item.market_cap}`}
              icon={<FontAwesomeIcon icon={faCoins} />}
            />
          ))}
        </div>
      )}
    </div>
  );
}
