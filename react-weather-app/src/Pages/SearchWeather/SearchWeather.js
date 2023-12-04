import React, { useState } from 'react';
import axios from 'axios';
import "./SearchWeather.css"
import searchIcon from "../SearchWeather/search-icon-png-9969.png"
import clockIcon from '../SearchWeather/clock_2088617.png'
import calendarIcon from '../SearchWeather//calendar_3248380.png'

function SearchWeather() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=951c0ac3ef8b0ab8bf3216ac874503fc`

    const searchLocation = (event) => {
        axios.get(apiUrl).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }

    return (
        <div className="main-wrapper">
            <div className="element-wrapper">

                {/* search weather area */}
                <div className="search-weather">
                    <input type="text" value={location} onChange={event => setLocation(event.target.value)} placeholder="enter your location..." className="search-weather-input"></input>
                    <button className="search-weather-btn" onClick={searchLocation}>
                        <img src={searchIcon} alt="search icon"></img>
                    </button>

                </div>

                {/* weather info area */}
                <div className="weather-info">
                    <div className="location">
                        <h2>Location</h2>
                        {data.name ? <p>{data.name}</p> : "--"}
                    </div>
                    <div className="temp">
                        {data.main ? <h2>{data.main.temp}</h2> : "--"}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : "--"}
                    </div>
                    <div  className='secondary-info'>
                        <div className="feels">
                            {data.main ? <p>{data.main.feels_like}</p> : "--"}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? <p>{data.main.humidity}%</p> : "--"}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? <p>{data.wind.speed}MPH</p> : "--"}
                            <p>Wind</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchWeather;