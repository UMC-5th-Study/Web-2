import { useState } from 'react';

const Login = () => {
  const [isLoggedIN, setIslog] = useState(false);

  const handleLoginClick = () => {
    setIslog(isLoggedIN);
    console.log('vv');
  };
  const handleLogoutClick = () => {
    setIslog(!isLoggedIN);
    console.log('aa');
  };
  return (
    <>
      <button
        className="buttons"
        onClick={() => {
          handleLoginClick();
          handleLogoutClick();
        }}
      >
        {isLoggedIN ? '로그아웃' : '로그인'}
      </button>
      {isLoggedIN && <span> 환영합니다!</span>}
      {!isLoggedIN && <span> 로그인 해주세요!</span>}
    </>
  );
};
export default Login;
