/* eslint-disable react/prop-types */
export default function WeatherMainInfo({ weather }) {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
        <div>{weather?.current.condition.text}</div>
        <div>{weather?.current.temp_c}ºC</div>
      </div>
      <div></div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5969.847437431876!2d${weather?.location.lon}54473434845!3d${weather?.location.lat}5511746656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1691771527350!5m2!1ses!2ses`}
        width="600"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div></div>
    </div>
  );
}
