//youtubeVideo: https://www.youtube.com/watch?v=UjeXpct3p7M&t=134s
import React, {useState} from "react"
import axios from "axios"

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [cityName, setCityName] = useState("")
  const [temperature, setTemperature] = useState("--")
  const [description, setDescription] = useState("")

  const APIkey = `db2bd71354b8918c801aa969583f91ac`
  //const cityName = `Minisota`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=` + APIkey


  const searchLocation = (event) => {
    if(event.key === "Enter")
    {
      axios.get(url).then((response) => {
        setData(response.data)
        setCityName(response.data.name);
        setTemperature(parseInt((((response.data.main.temp)-273.15)*(9/5))+32.5))
        setDescription(response.data.weather[0].description);
        console.log(response.data)
      })
      setLocation("")
    }
  }


  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder="Enter City..."
        onKeyPress={searchLocation}
        type="text" />
      </div>
      <div className="container">
      <div className="top">
        <div className="location">
          <p>{cityName}</p>
        </div>
        <div className="temp">
        <h1>{`${temperature}°F`}</h1>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p className="bold">65°F</p>
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p className="bold">20%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className='bold'>12 MPH</p>
          <p>Wind</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
