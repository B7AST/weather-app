import {Route, Routes} from 'react-router-dom'
import SearchWeather from './SearchWeather/SearchWeather'
import WeatherInfo from './WeatherInfo/WeatherInfo';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchWeather/>} />
      <Route path="/weather-info" element={<WeatherInfo/>} />
    </Routes>
  );
}

export default App;
