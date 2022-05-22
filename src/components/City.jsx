import React from "react";
import s from './styles/City.module.css'

export default function City({ city }) {
    const img = city.img
    return (
          <div className={s.body}> 
                   <div className={s.container}>
                       <div className={s.cityName} > {city.name}</div>
                       <div className={s.row}> 
                         <div className={s.temp}>{Math.round(city.temp/10)} ºC</div>
                         <img className={s.icon} src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="130px" height="130" alt="" />
                        </div>
                      </div>      
                     <div className={s.container2}>
                        <div className={s.description}>
                           <div>Weather: {city.weather}</div>
                           <div>Wind: {city.wind} km/h</div>
                           <div>Amount of clouds: {city.clouds}</div>
                           <div>Latitude: {city.latitud}º</div>
                           <div>Longitude: {city.longitud}º</div>
                        </div>
                    </div>
                </div>
      )
    }