import { useState } from "react"

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("")

  function onChangeInputForm(e) {
    const value = e.target.value

    if(value !== "") {
      setCity(value)
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    onChangeCity()
  }

  return (
   <form onSubmit={handleSubmitForm}>
    <input type="text" onChange={onChangeInputForm} />
   </form>
  )
}