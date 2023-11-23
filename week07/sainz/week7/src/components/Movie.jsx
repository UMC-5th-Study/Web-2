import { useNavigate } from 'react-router-dom';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
const Movie = ({ title, poster_path, vote_average, overview }) => {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movie/${title}`, {
      state: { poster_path, vote_average, overview },
    });
    console.log('aa');
  };
  return (
    <>
      <div className="movie-container">
        <img
          src={IMG_BASE_URL + poster_path}
          alt="영화포스터"
          onClick={onClickImg}
        />
        <div className="movie-info">
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>
      </div>
    </>
  );
};
export default Movie;
