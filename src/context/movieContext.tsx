import React, { createContext, useState } from "react";

interface IMovieContext {
  info: any;
  setInfo: React.Dispatch<React.SetStateAction<never[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const MovieContext = createContext<IMovieContext>({} as IMovieContext);

const MovieProvider = (props: { children: any }) => {
  const { children } = props;
  const [info, setInfo] = useState({});
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
