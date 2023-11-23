const CardDetail = ({ title, overview }) => {
  return (
    <div className="card-detail">
      <h5>{title}</h5>

      <p>{overview}</p>
    </div>
  );
};

export default CardDetail;
