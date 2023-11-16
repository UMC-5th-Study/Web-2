const Ad = ({show}) => {
    return (
      show && <img src="img.svg" alt="ad" style={{ width: "100%" }} />
    );
  };
  
  export default Ad;