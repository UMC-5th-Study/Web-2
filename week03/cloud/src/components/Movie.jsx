const Movie = ({ poster_path, title, vote_average }) => {
  return (
    <div className="movie-box">
      <img
        src={"https://www.themoviedb.org/t/p/w440_and_h660_face" + poster_path}
        alt="poster"
      />

      <div className="box">
        <span className="title">{title}</span>

        <span className="average">{vote_average}</span>
      </div>
    </div>
  );
};

export default Movie;
