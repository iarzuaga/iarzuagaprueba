import React, { createContext, useState } from "react";

const MovieContext = createContext<null | {
  movies: any[];
  setMovies: React.Dispatch<React.SetStateAction<never[]>>;
}>(null);

const MovieProvider  = (props: { children: any; }) => {
  const {children} = props;
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
