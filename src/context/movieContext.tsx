import React, { createContext, useState } from "react";

export type MovieT = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type infoT = {
  page: number;
  results: MovieT[];
  total_pages: number;
  total_results: number;
};

interface IMovieContext {
  info: infoT;
  setInfo: React.Dispatch<infoT>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const MovieContext = createContext<IMovieContext>({} as IMovieContext);

const MovieProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [info, setInfo] = useState<infoT>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <MovieContext.Provider
      value={{
        info,
        setInfo,
        loading,
        setLoading,
        error,
        setError,
        query,
        setQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
