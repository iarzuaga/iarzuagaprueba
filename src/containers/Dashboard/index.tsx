import { useContext, useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import SearchBar from "../../components/SearchBar";
import { useApi } from "../../hooks";
import { MovieContext } from "../../context/movieContext";
import "./index.css";
import Space from "../../images/space.jpeg";

const Dashboard = () => {
  const { setInfo, setLoading, error, setError, setQuery, query } =
    useContext(MovieContext);

  const { getMovies } = useApi();
  const handleSearch = async (query: string, page: number) => {
    setQuery(query);
    // setError(false);
    setLoading(true);
    const response = await getMovies(query, page);
    if (response) {
      setLoading(false);
      setInfo(response.data);
    } else {
      setError(true);
    }
  };

  return (
    <div className="dashboard">
      <div
        style={{ backgroundImage: `url(${Space})` }}
        className="dashboard-background"
      />
      <SearchBar onSearch={handleSearch} />
      {query ? (
        !error ? (
          <MovieList />
        ) : (
          <div className="no-movies">
            <div>An error has ocurred, try again later</div>
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
