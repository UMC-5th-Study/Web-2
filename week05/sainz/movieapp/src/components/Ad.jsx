// import '../images/Adi.svg';
const Ad = ({ isAd }) => {
  return (
    isAd && <img src="../images/Ad.svg" alt="ad" style={{ width: '100%' }} />
  );
};
export default Ad;
