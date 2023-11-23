import { tvResponse } from "../utils/constants";

import Card from "../components/Card";

const TV = () => {
  const { results: datas } = tvResponse;

  return (
    <div className="video-page">
      {datas.map((movie) => (
        <Card key={movie.id} title={movie.name} {...movie} />
      ))}
    </div>
  );
};

export default TV;
