import React, { useState, useEffect } from "react";
import { getExchange } from "../services/exchangeService";
import Card from "../components/UI/Card";
import Pagination from "../components/UI/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faSearch } from "@fortawesome/free-solid-svg-icons";
import Title from "../components/common/Title";


import {
    Box,

} from "@mui/material";
import SearchInput from "../components/common/SearchInput";
export default function Exchange() {
    const [baseInput, setBaseInput] = useState("");
    const [base, setBase] = useState("");
    const [rates, setRates] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 32;

    useEffect(() => {
        if (!base) return;
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
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Title title="Clima Actual" icon={faDollarSign} />

            <Box sx={{ my: 2 }}>
                <SearchInput
                    label="Moneda base (USD, EUR, PEN)"
                    value={baseInput}
                    onChange={setBaseInput}
                    onSearch={handleSearch}
                />
            </Box>

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
        </Box>
    );
}
