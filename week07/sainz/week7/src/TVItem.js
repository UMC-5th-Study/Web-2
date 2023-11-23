import React from 'react';

const TVItem = ({
  name,
  poster_path,
  first_air_date,

  vote_average /* 다른 TV 속성들 */,
}) => {
  return (
    <div className="box-wrap">
      {/* TV 속성들을 이용하여 TV 아이템을 렌더링 */}
      <img
        src={'https://image.tmdb.org/t/p/w1280/' + poster_path}
        alt="이미지"
      />
      <div className="box_contain">
        <p>{name}</p>
        <p>평점:{vote_average}</p>
        <p>방영: {first_air_date}</p>
      </div>
    </div>
  );
};

export default TVItem;
