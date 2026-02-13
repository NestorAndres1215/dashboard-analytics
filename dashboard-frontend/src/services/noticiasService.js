import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getNoticias = async (categoria = "general") => {
  try {
    const res = await axios.get(`${API_URL}/noticias?categoria=${categoria}`);
    return res.data.articles;
  } catch (error) {
    throw error;
  }
};
