import axios from "axios";

const apiKey = process.env.API_KEY;

export const useApi = () => {
  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });

  const getMovies = (query: string, page: number) => {
    return api
      .get(`/search/movie?query=${query}&page=${page}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .catch((error) => error);
  };

  return { getMovies };
};
