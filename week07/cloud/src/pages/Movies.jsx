import Card from "../components/Card";

import { movies } from "../utils/constants";

const Movies = () => {
  const { results: datas } = movies;

  return (
    <div className="video-page">
      {datas.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Movies;
