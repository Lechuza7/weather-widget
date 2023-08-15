/* eslint-disable react/prop-types */
import { useState } from "react"
import styles from './WeatherForm.module.css'

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("")

  function handleChange(e) {
    setCity(e.target.value)
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    onChangeCity(city)
  }

  return (
   <form className={styles.container} onSubmit={handleSubmitForm}>
    <input className={styles.input} type="text" value={city} onChange={handleChange} />
   </form>
  )
}