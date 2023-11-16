import { useState } from "react";

import Ad from "./Ad";

const AdPage = () => {
  const [show, setShow] = useState(true);

  const handleToggleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Ad show={show} />

      <button onClick={handleToggleClick}>
        광고 {show ? "안보기" : "보기"}
      </button>
    </>
  );
};

export default AdPage;
