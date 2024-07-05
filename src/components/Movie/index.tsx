import { MovieT } from "../../context/movieContext";
import "./index.css";

const Movie = (props: { movie: MovieT }) => {
  const { movie } = props;
  const showImage = !movie.poster_path;
  return (
    <div className="movie-container" key={movie.id}>
      {showImage ? (
        <div data-testid="no-image" className="no-image">Imagen no disponible</div>
      ) : (
        <img data-testid="image" src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} />
      )}
      <div>
        <div data-testid="title">{movie.title}</div>
        <div data-testid="release-date">{movie.release_date?.slice(0, 4)}</div>
      </div>
    </div>
  );
};

export default Movie;
