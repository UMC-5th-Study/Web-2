import { MovieDetail } from "../MovieDetail";

import { MovieBox, MovieContent } from "./Movie.style";

const Movie = ({ poster_path, title, vote_average, overview }) => {
  return (
    <MovieBox>
      <img
        src={"https://www.themoviedb.org/t/p/w440_and_h660_face" + poster_path}
        alt="poster"
      />

      <MovieContent>
        <h1>{title}</h1>

        <span>{vote_average}</span>
      </MovieContent>

      <MovieDetail title={title} overview={overview} />
    </MovieBox>
  );
};

export default Movie;
