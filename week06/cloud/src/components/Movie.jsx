import { useNavigate } from "react-router-dom";

import MovieDetail from "./MovieDetail";

const Movie = ({ id, poster_path, title, vote_average, overview }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/movie/${id}`, {
      state: { title, poster_path },
    });
  };

  return (
    <div className="movie-box" onClick={onClick}>
      <img
        src={"https://www.themoviedb.org/t/p/w440_and_h660_face" + poster_path}
        alt="poster"
      />

      <div className="box">
        <span className="title">{title}</span>

        <span className="average">{vote_average}</span>
      </div>

      <MovieDetail title={title} overview={overview} />
    </div>
  );
};

export default Movie;
