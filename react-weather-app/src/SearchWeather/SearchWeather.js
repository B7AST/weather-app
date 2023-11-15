import "./SearchWeather.css"
import searchIcon from "../SearchWeather/search-icon-png-9969.png"

function SearchWeather() {
    return (
        <div className="search-weather">
            <input type="text" placeholder="enter your location" className="search-weather-input"></input>
            <button className="search-weather-btn">
                <img src={searchIcon} alt="search icon"></img>
            </button>
        </div>
    )
}

export default SearchWeather;