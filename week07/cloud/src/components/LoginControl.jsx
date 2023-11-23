import { useState } from "react";

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div className="login-control">
      <button onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>

      <span>{isLoggedIn ? "환영합니다!" : "로그인 해주세요!"}</span>
    </div>
  );
};

export default LoginControl;
