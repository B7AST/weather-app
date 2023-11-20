import React from 'react'
// import PropTypes from 'prop-types'
import './WeatherInfo.css'
import clockIcon from '../WeatherInfo/clock_2088617.png'
import calendarIcon from '../WeatherInfo//calendar_3248380.png'
import { useNavigate } from 'react-router-dom'

function WeatherInfo(props) {

    const navigate = useNavigate()
    
    return(
        <div>
            <div className="weather-info">
                <div className="location-temp">

                </div>
                <div className="hourly-forecast">
                    <div className="forecast-title">
                        <img src={clockIcon} alt="clock-icon"></img>
                        <p>Hourly Forecast</p>
                    </div>
                </div>
                <div className="weekly-forecast">
                    <div className="forecast-title">
                        <img src={calendarIcon} alt="calendar icon"></img>
                        <p>Weekly Forecast</p>
                    </div>
                </div>
            <button className="back-to-src-btn" onClick={() => navigate("/")}>Back to Search</button>
            </div>
        </div>
    )
}

WeatherInfo.propTypes = {}

export default WeatherInfo