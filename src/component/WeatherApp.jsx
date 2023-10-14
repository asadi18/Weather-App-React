import { useState } from "react";
import styled from "styled-components";

const WeatherApp = () => {
  let APIKEY = "9dc718197d69dcb51d5db26b0c13a73b";
  const cloud = "images/cloud.png";
  const drizzle = "images/drizzle.png";
  const rain = "images/rain.png";
  const snow = "images/snow.png";
  const clearSky = "images/clear.png";
  const [weatherIcon, setWeatherIcon] = useState(cloud);
  

  const searchData = async () => {
    const element = document.getElementsByClassName("inputCity");
    if (element[0].value === "") {
      return;
    }
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${APIKEY}`;
    let response = await fetch(URL);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind");
    const temprature = document.getElementsByClassName("weatherTemp");
    const location = document.getElementsByClassName("Location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temprature[0].innerHTML = data.main.temp + " °C";
    location[0].innerHTML = data.name;

    // if(humidity[0].innerHTML != data.main.humidity && wind[0].innerHTML != data.wind.speed && temprature[0].innerHTML != data.main.temp && location[0].innerHTML != data.name){
    //   return
    // }

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(clearSky);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWeatherIcon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWeatherIcon(cloud);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWeatherIcon(cloud);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWeatherIcon(rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWeatherIcon(snow);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherIcon(drizzle);
    } else {
      setWeatherIcon(clearSky);
    }
    element[0].value = "";
  };

  return (
    <Container>
      <div className="topBar">
        <input
          type="text"
          className="inputCity"
          placeholder="Enter the City Name"
        /> 
        <div
          className="icon"
          onClick={() => {
            searchData();
          }}
        >
          <img src="/images/search.png" alt="search" />
        </div>
      </div>
      <div className="weatherImage">
        <img src={weatherIcon} alt="Weather Icon" />
      </div>

      <div className="weatherTemp">°C</div>
      <div className="Location">Location</div>

      <div className="btcontainer">
        <div className="boxes">
          <img src="images/humidity.png" alt="Humidity" />

          <div className="humidityData">
            <div className="humidity"> 0 %</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="boxes">
          <img src="images/wind.png" alt="Wind" />

          <div className="windData">
            <div className="wind"> 0 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WeatherApp;

const Container = styled.div`
  background-color: #1f242d;
  height: 620px;
  width: 500px;
  margin: auto;
  margin-top: 35px;
  margin-bottom: 25px;
  border-radius: 25px;
  box-shadow: 0 0 16px #0ef;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 10px;


  .topBar {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding-top: 0px;
  }
  .topBar input {
    display: flex;
    width: 362px;
    height: 40px;
    border-radius: 20px;
    padding-left: 20px;
    outline: none;
    border: none;

    &:hover {
      box-shadow:  0 0 16px #0ef;
      outline: none;
      
    }
  }
  .icon {
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      box-shadow: 0 0 16px #0ef;
    }
  }
  .weatherImage img {
    height: 150px;
  }
  .weatherTemp {
    font-size: 70px;
    font-weight: 500;
  }
  .Location {
    font-size: 40px;
    font-weight: 400;
  }
  .btcontainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 150px;
    padding-top: 40px;
  }
  .boxes {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
  }
`;
