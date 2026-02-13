import React, { useState, useEffect } from "react";
import { getExchange } from "../services/exchangeService";
import Card from "../components/UI/Card";
import Pagination from "../components/UI/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Exchange() {
    const [baseInput, setBaseInput] = useState(""); // input del usuario
    const [base, setBase] = useState(""); // moneda base actual
    const [rates, setRates] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 32;

    useEffect(() => {
        if (!base) return; // no llamar API si no hay moneda
        const fetchExchange = async () => {
            try {
                const res = await getExchange(base);
                setRates(res.rates);
                setCurrentPage(1);
            } catch (error) {
                console.error(error);
                setRates(null);
            }
        };
        fetchExchange();
    }, [base]);

    const handleSearch = () => {
        if (!baseInput) return;
        setBase(baseInput.toUpperCase());
    };

    if (!rates && base) return <p>Cargando...</p>;

    const ratesArray = rates ? Object.entries(rates) : [];
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentRates = ratesArray.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(ratesArray.length / itemsPerPage);

    return (
        <div>
            <h1>
                <FontAwesomeIcon icon={faDollarSign} /> Tipo de cambio
            </h1>

            <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
                <input
                    value={baseInput}
                    onChange={(e) => setBaseInput(e.target.value)}
                    placeholder="Ej: USD"
                    style={{
                        padding: "8px 12px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        flex: 1,
                    }}
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

            {rates && (
                <>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
  }}
>
  {currentRates.map(([currency, value]) => (
    <Card
      key={currency}
      title={currency}
      value={value}
      icon={<FontAwesomeIcon icon={faDollarSign} />}
    />
  ))}
</div>


                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPrev={() => setCurrentPage(currentPage - 1)}
                            onNext={() => setCurrentPage(currentPage + 1)}
                        />
                    </div>

                </>
            )}
        </div>
    );
}
