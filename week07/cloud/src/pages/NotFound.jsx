import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const onClick = () => navigate("/");

  return (
    <div className="not-found-page">
      <div className="container">
        <h1>해당 페이지를 찾지 못했습니다.</h1>{" "}
        <h2>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</h2>
        <span onClick={onClick}>메인 페이지로 이동</span>
      </div>
    </div>
  );
};

export default NotFound;
