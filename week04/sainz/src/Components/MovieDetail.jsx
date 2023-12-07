import '../movieDummy';

const MovieD = ({ title, overview }) => {
  return (
    <div className="movieDetail">
      <h5>{title}</h5>
      <p>{overview}</p>
    </div>
  );
};
export default MovieD;
