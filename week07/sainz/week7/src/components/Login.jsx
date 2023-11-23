import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginc = () => {
  const [isloggedin, setIslog] = useState(true);

  const navigate = useNavigate();
  const Loginpag = () => {
    navigate('/Loginpage');
  };
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
          Loginpag();
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
