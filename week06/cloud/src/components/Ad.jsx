const Ad = ({ show }) => {
  return (
    show && <img src="/assets/ad.svg" alt="ad" style={{ width: "100%" }} />
  );
};

export default Ad;
