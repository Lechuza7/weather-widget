import { useState } from "react"

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("")

  function handleChange(e) {
    const cityValue = e.target.value

    if(cityValue !== "") {
      setCity(cityValue)
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    onChangeCity(city)
  }

  return (
   <form onSubmit={handleSubmitForm}>
    <input type="text" value={city} onChange={handleChange} />
   </form>
  )
}