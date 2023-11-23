import { useLocation, useParams } from 'react-router-dom';

export default function MovieDetail() {
  // URL에서 동적으로 받아온 id
  const { title } = useParams();

  // 네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
  // 이미지, 별점 등의 모든 정보들
  const { state } = useLocation();

  // state에서 필요한 정보 추출
  const { poster_path, vote_average, overview } = state;

  console.log(title);
  console.log(state);

  return (
    <div className="detailpage">
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt="aa" />
      <p>Rating: {vote_average}</p>
      <p>{overview}</p>
    </div>
  );
}
