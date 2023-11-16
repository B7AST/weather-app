import './WeatherInfo.css'
import clockIcon from '../WeatherInfo/clock_2088617.png'
import calendarIcon from '../WeatherInfo//calendar_3248380.png'

function WeatherInfo() {
    return(
        <div>
            <div className="weather-info">
                <div className="location-temp">

                </div>
                <div className="hourly-forecast">
                    <div className="forecast-title">
                        <img src={clockIcon}></img>
                        <p>Hourly Forecast</p>
                    </div>
                </div>
                <div className="weekly-forecast">
                    <div className="forecast-title">
                        <img src={calendarIcon}></img>
                        <p>Weekly Forecast</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo