import { useState } from 'react';

const Loginc = () => {
  const [isloggedin, setIslog] = useState(true);

  const handlelogin = () => {
    setIslog(isloggedin);
  };
  const handlelogout = () => {
    setIslog(!isloggedin);
  };
  return (
    <>
      <button
        className="buttons"
        onClick={() => {
          handlelogin();
          handlelogout();
        }}
      >
        {isloggedin ? '로그인' : '로그아웃'}
      </button>
      {isloggedin && <span> 로그인해주세요</span>}
      {!isloggedin && <span> 환영합니다!</span>}
    </>
  );
};

export default Loginc;
