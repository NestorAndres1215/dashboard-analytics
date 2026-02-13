import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getClima = async (ciudad) => {
  try {
    const res = await axios.get(`${API_URL}/clima/${ciudad}`);
    return res.data;
  } catch (error) {
    console.error("Error en climaService:", error);
    throw error;
  }
};
