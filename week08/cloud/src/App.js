import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const API_KEY = "08a2262588600c40fa365d59b052d542";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getDatas = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      setWeather(data);
    } catch (e) {
      setWeather(null);
      console.error(e);
    }
  };

  const temparature = useMemo(() => {
    if (!weather) return null;
    return Math.round((weather.main.temp - 273.15) * 10) / 10;
  }, [weather]);

  useEffect(() => {
    if (city !== "") {
      getDatas();
    }
  }, [city]);

  return (
    <>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="도시를 입력하세요."
      />

      {weather && (
        <div className="weather">
          <div>
            <span className="city">{weather.name}</span>
            <span className="temparature">{temparature}°C</span>
          </div>
          {weather.weather && (
            <span className="main">{weather.weather[0].main}</span>
          )}
        </div>
      )}
    </>
  );
};

export default App;
