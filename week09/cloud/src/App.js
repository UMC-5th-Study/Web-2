import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({ id: "", pw: "" });

  const handleChangeInput = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.id === "" || data.pw === "") {
      alert("값이 비어있습니다.");
      return;
    }

    try {
      const { data: loginData } = await axios.post(
        "http://localhost:8000/user/login",
        data
      );

      alert("로그인 성공");
      console.log(loginData);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="id"
        value={data.id}
        placeholder="아이디를 입력해주세요."
        onChange={handleChangeInput}
      />

      <input
        type="password"
        name="pw"
        value={data.pw}
        placeholder="비밀번호를 입력해주세요."
        onChange={handleChangeInput}
      />

      <button type="submit">로그인</button>
    </form>
  );
};

export default App;
