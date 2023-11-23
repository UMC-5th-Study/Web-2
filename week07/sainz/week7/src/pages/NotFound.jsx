import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClickText = () => {
    navigate(`/`);
    // console.log('aa');
  };
  return (
    <div className="not">
      <h1>해당 페이지를 찾지 못했습니다</h1>
      <h2>주소가 잘못되었거나 더이상 지원하지 않는 페이지</h2>
      <p className="pagen" onClick={handleClickText}>
        눌러서 메인으로 이동
      </p>
    </div>
  );
};
export default NotFound;
