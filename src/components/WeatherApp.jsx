import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import './WeatherApp.css';
import WeatherMainInfo from "./WeatherMainInfo";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])
  
  async function loadInfo(city = "Barcelona") {
    console.log(city)
    try {
      const cityInfo = await fetch(
        `${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`
        );
      const cityWeather = await cityInfo.json() 
      setWeather(cityWeather)
    } catch (err) {
      console.error(err)
    }

    console.log(weather)
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="weather_container">
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
}
