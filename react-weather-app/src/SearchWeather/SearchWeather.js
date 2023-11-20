import { useNavigate } from 'react-router-dom'
import "./SearchWeather.css"
import searchIcon from "../SearchWeather/search-icon-png-9969.png"


function SearchWeather() {
    const navigate = useNavigate()
    
    return (
        <div className="search-weather">
            <input type="text" placeholder="enter your location" className="search-weather-input"></input>
            <button className="search-weather-btn" onClick={() => navigate("/weather-info")}>
                <img src={searchIcon} alt="search icon"></img>
            </button>
        </div>
    )
}

export default SearchWeather;