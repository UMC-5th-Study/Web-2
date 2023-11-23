import { useNavigate } from "react-router-dom";

import CardDetail from "./CardDetail";

const Card = ({ id, poster_path, title, vote_average, overview }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/video/${id}`, {
      state: { title, poster_path },
    });
  };

  return (
    <div className="card" onClick={onClick}>
      <img
        src={"https://www.themoviedb.org/t/p/w440_and_h660_face" + poster_path}
        alt="poster"
      />

      <div className="box">
        <span className="title">{title}</span>

        <span className="average">{vote_average}</span>
      </div>

      <CardDetail title={title} overview={overview} />
    </div>
  );
};

export default Card;
