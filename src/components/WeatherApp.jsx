import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import styles from './WeatherApp.module.css';
import WeatherMainInfo from "./WeatherMainInfo";
import Loading from './Loading';

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo()
  },[])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])
  
  async function loadInfo(city = "Barcelona") {

    try {
      const cityInfo = await fetch(
        `${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`
      );
      
      if (!cityInfo.ok) {
        throw new Error(`Failed to fetch: ${cityInfo.status} ${cityInfo.statusText}`);
      }

      const cityWeather = await cityInfo.json() 
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
    <div className={styles.weather_container}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather}/> : <Loading/> }
    </div>
  );
}
