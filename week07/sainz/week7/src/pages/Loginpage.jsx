import { useState } from 'react';
const Loginpage = () => {
  const [right, setisright] = useState(false);
  const [pass, setispass] = useState(false);
  // const [disabled, setdisabled] = useState(false);

  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const isValidEmail = regExp.test(e.target.value);

    setisright(() => (isValidEmail ? true : false));
  };
  const message = () => {
    return right ? (
      <p className="rightm">올바른 이메일 형식입니다</p>
    ) : (
      <p className="errorm">이메일을 다시 입력해주세요</p>
    );
  };
  const checkPwd = (e) => {
    var regExp2 = /^[A-Za-z0-9]{8,20}$/;
    console.log(regExp2.test(e.target.value));
    const isValidPwd = regExp2.test(e.target.value);
    setispass(() => (isValidPwd ? true : false));
  };
  const message2 = () => {
    return pass ? (
      <p className="rightm"> 올바른 비밀번호 형식</p>
    ) : (
      <p className="errorm">올바른 비밀번호를 입력해주세요 </p>
    );
  };
  return (
    <>
      <h1>이메일과 비밀번호를 입력해주세요</h1>
      <p>이메일주소</p>
      <input
        type="email"
        name="이메일"
        id="emailblank"
        placeholder="e-mail을 입력해주세요"
        onBlur={checkEmail}
      />

      {message()}
      <br />
      <p>비밀번호</p>
      <input
        type="password"
        name="비번"
        id="pwdblank"
        placeholder="비밀번호를 입력해주세요"
        onBlur={checkPwd}
      />
      {message2()}
      <br />
      <button
        className="submit"
        disabled={!(setisright && setispass && right && pass)}
      >
        제출
      </button>
    </>
  );
};
export default Loginpage;
