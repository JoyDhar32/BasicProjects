import React from 'react'
import  './Style.css'
import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
import humidity_icon from "../assets/humidity.png"
const Weather = () => {
  return (
    <>
    <div className="container">
        <main className="mainBody">
        <h1> Weather Application</h1>

        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="enter city"/>
            <div className="search-icon">
                <img src={search_icon} alt="search icon"/>
            </div>
        </div>
        </main>
    </div>
    </>
  )
}

export default Weather