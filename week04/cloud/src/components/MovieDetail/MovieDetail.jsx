import { MovieDetailBox } from "./MoviceDetail.style";

const MovieDetail = ({ title, overview }) => {
  return (
    <MovieDetailBox className="movie-detail">
      <h2>{title}</h2>

      <p>{overview}</p>
    </MovieDetailBox>
  );
};

export default MovieDetail;
