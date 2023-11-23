import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/login");
  };

  return (
    <div className="login-control">
      <button onClick={handleClickButton}>로그인</button>
    </div>
  );
};

export default LoginButton;s