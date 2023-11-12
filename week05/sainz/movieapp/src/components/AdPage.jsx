import Ad from '../components/Ad';
import { useState } from 'react';

const Adp = () => {
  const [isAd, setIsAd] = useState(true);

  const handleToggleClick = () => {
    setIsAd(!isAd);
  };
  return (
    <>
      <Ad isAd={isAd} />

      <button className="adbutton" onClick={handleToggleClick}>
        AD{!isAd ? '보기' : '가리기'}
      </button>
    </>
  );
};
export default Adp;
