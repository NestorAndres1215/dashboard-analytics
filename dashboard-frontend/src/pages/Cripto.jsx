import React, { useState, useEffect } from "react";
import { getCripto } from "../services/criptoService";
import Card from "../components/UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

import Title from "../components/common/Title";
import SearchInput from "../components/common/SearchInput";

import {
  Box,
  Typography,
} from "@mui/material";

export default function Cripto() {
  const [monedaInput, setMonedaInput] = useState("");
  const [vsInput, setVsInput] = useState("");
  const [moneda, setMoneda] = useState("");
  const [vs, setVs] = useState("");
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
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Title title="Criptomonedas" icon={faCoins} />

      <div className="row my-2">
        <div className="col-12 col-md-6">
          <SearchInput label="Criptomoneda (bitcoin)" value={monedaInput}
            onChange={setMonedaInput} onSearch={handleSearch} />
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <SearchInput label="Moneda (usd, pen)" value={vsInput}
            onChange={setVsInput} onSearch={handleSearch} />
        </div>
      </div>


      {/* ⏳ Loading */}
      {loading && (
        <Typography sx={{ mt: 2 }}>Cargando...</Typography>
      )}

      {/* 📊 Resultados */}
      {data.length > 0 && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 2,
            mt: 3,
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
        </Box>
      )}
    </Box>
  );
}