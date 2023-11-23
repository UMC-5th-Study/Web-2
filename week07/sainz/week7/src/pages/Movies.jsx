import Movie from '../components/Movie';
import { movies } from '../movieDummy';

const Movies = () => {
  const { results: datas } = movies;

  return (
    <div className="movie-page">
      {datas.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Movies;
