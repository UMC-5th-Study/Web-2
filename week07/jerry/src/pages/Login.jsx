import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isErrorEmail, setIsErrorEmail] = useState(false);

  const handleChangeInput = ({ target: { name, value } }) => {
    const newData = {
      ...data,
      [name]: value,
    };

    setData({ ...newData });
    setIsErrorEmail(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIsErrorEmail = !/^(.+)@(.+)\.com$/g.test(data.email);
    if (newIsErrorEmail) {
      setIsErrorEmail(newIsErrorEmail);
      return;
    }

    alert("Success");
  };

  return (
    <div className="login-page">
      <div className="container">
        <h1>
          이메일과 비밀번호를
          <br />
          입력해주세요
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">이메일 주소</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChangeInput}
            />
            {isErrorEmail && (
              <span className="error-text">올바른 이메일을 입력해주세요.</span>
            )}
          </div>

          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChangeInput}
            />
          </div>

          <button type="submit" disabled={isErrorEmail || data.password === ""}>
            확인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;