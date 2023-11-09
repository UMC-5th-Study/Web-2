// import movies from './movieDummy';

import MovieD from '../MovieDetail';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
const Movie = ({ title, overview, poster_path, vote_average }) => {
  // console.log(props);
  return (
    <div className="movie-container">
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
      <MovieD title={title} overview={overview} />
    </div>
  );
};
export default Movie;
