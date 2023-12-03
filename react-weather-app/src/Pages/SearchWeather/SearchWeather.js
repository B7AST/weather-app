import { useNavigate, useHistory } from 'react-router-dom'
import { useState } from 'react'
import "./SearchWeather.css"
import searchIcon from "../SearchWeather/search-icon-png-9969.png"

function SearchWeather() {
    const navigate = useNavigate()
    // const history = useHistory()

    const [location, setLocation] = useState('')
    console.log(location)

    return (
        <div className="search-weather">
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="enter your location" className="search-weather-input"></input>
            <button className="search-weather-btn" onClick={() => {navigate(`/weather-info`
            // ,{
            //     state:{location}
            // }
            )}}>

                <img src={searchIcon} alt="search icon"></img>
            </button>
        </div>
    )
}

export default SearchWeather;