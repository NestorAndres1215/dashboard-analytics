import React from "react";

export default function Pagination({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div style={{ marginTop: "15px", display: "flex", gap: "10px", alignItems: "center" }}>
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        style={{
          padding: "5px 15px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: currentPage === 1 ? "#cccccc" : "#3aafa9",
          color: "#fff",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        Anterior
      </button>

      <span>
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        style={{
          padding: "5px 15px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: currentPage === totalPages ? "#cccccc" : "#3aafa9",
          color: "#fff",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Siguiente
      </button>
    </div>
  );
}
