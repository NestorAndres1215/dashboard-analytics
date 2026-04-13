import React from "react";
import { TextField } from "@mui/material";

const SearchInput = ({ label, value, onChange, onSearch }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onSearch()}
      fullWidth
    />
  );
};

export default SearchInput;