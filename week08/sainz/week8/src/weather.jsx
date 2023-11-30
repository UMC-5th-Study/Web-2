import React, { useState, useEffect } from 'react';

const Weather = () => {
  const API_KEY = '512dbd1927965da0bbf191bc105c0b6a';

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherData = async (city) => {
    try {
      setError(null);
      setWeatherData(null);
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error('날씨 데이터를 가져오는 데 실패했습니다');
      }

      const data = await response.json();
      setWeatherData(data);
      console.log('Weather data:', data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 기본 도시에 대한 날씨 데이터를 가져옵니다
    getWeatherData('seoul');
  }, []); // 마운트 시에만 실행되도록 빈 의존성 배열

  // const handleInputChange = (e) => {
  //   // 입력 변경을 처리하고 도시를 업데이트합니다
  //   if (e.key === 'Enter') {
  //     const city = e.target.value;
  //     getWeatherData(city);
  //   }
  // };
  const handleKeyDown = (e) => {
    // 엔터 키를 눌렀을 때만 getWeatherData 호출
    if (e.key === 'Enter') {
      const city = e.target.value;
      getWeatherData(city);
    }
  };
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다: {error}</div>;
  if (!weatherData) return null;

  return (
    <>
      <div className="weather-container">
        <input
          type="text"
          placeholder="도시를 입력하세요"
          // onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="inform">
        {/* 날씨 데이터에서 관련 정보를 표시합니다 */}
        <h2>{weatherData.name}</h2>
        <div className="inform2">
          <p>{Math.round((weatherData.main.temp - 273.15) * 10) / 10}°C</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
        {/* 필요에 따라 더 많은 정보를 추가할 수 있습니다 */}
      </div>
    </>
  );
};

export default Weather;
