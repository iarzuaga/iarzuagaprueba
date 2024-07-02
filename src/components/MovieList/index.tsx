import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import "./index.css";
import Movie from "../Movie";
import Paginator from "../Paginator";

const MovieList = () => {
  const { info } = useContext(MovieContext);
  const renderMovies = () => {
    const movieList = info?.results;
    return movieList.map((movie: any) => {
      return <Movie movie={movie} key={movie.id} />;
    });
  };
  return (
    <div>
      {info?.results?.length > 0 ? (
        <div className="movie-list-container">
          {renderMovies()}
          <Paginator/>
        </div>
      ) : (
        <div className="no-movies">
          <div>We are sorry, there are no movies with that title</div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
