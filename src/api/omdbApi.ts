import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_API_URL;

// Film arama fonksiyonu
export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        s: query,
        apikey: API_KEY,
      },
    });

    return response.data.Search;

    console.log(response.data.Search);
  } catch (error) {
    console.error("Film arama hatası:", error);
    return [];
  }
};

// Film detaylarını getirme fonksiyonu
export const getMovieDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });

    return response.data;

    console.log(response.data);
  } catch (error) {
    console.error("Film detayları getirme hatası:", error);
    return null;
  }
};
