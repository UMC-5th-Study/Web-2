const Moviestyle = ({ title, overview }) => {
  return (
    <div className="movie-detail">
      <h5>{title}</h5>

      <p>{overview}</p>
    </div>
  );
};

export default Moviestyle;