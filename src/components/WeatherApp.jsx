import { useState } from "react";
import WeatherForm from "./WeatherForm";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  
  async function loadInfo(city = "Barcelona") {
    console.log(city)
    try {
      const cityWeather = await fetch(
        `${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`
        );
        
      setWeather(cityWeather)
    } catch (err) {
      console.error(err)
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>Info</div>
    </div>
  );
}
