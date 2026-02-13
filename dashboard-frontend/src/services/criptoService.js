import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getCripto = async (moneda, vs_currency = "usd") => {
  try {
    const res = await axios.get(`${API_URL}/cripto/${moneda}?vs=${vs_currency}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
