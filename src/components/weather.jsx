import React from "react";
import "./weather.css";

/*
//Save Data to Local Storage
localStorage.setItem(key, value);
//Read Data from Local Storage
let lastname = localStorage.getItem(key);
//Remove Data from Local Storage
localStorage.removeItem(key);
//Remove All (Clear Local Storage)
localStorage.clear();
*/

function getLocation() {
  const apiKey = "827cd00c74aa212544f43a7c47b3922a"; // Replace with your OpenWeather API key
  const zipCode = "BT38";
  const countryCode = "GB";
  const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("lat", data.lat);
      localStorage.setItem("lon", data.lon);
      //console.log(lat, lon); // make this save as local storage
    });
}

function getWeather() {
  getLocation();
  const apiKey = "827cd00c74aa212544f43a7c47b3922a";
  const lat = localStorage.getItem("lat");
  const lon = localStorage.getItem("lon");

  //const url = `https://api.openweathermap.org/data/3.0/onecall?lat=54.728&lon=-5.756&exclude=hourly,minutely&appid=${apiKey}&units=metric`;

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const currTemp = document.getElementById("currTemp");
      const currImg = document.getElementById("currImg");
      const currDescription = document.getElementById("currDescription");
      const days = document.getElementById("weatherDays");
      const daysImg = document.getElementById("daysImg");
      const daysDescription = document.getElementById("daysDescription");

      // DAYS
      const today = new Date();
      const weekday = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];

      // Today
      const descript = data.current.weather[0].description;
      const temp = data.current.temp;
      const icon = data.current.weather[0].icon;
      const currMin = data.daily[0].temp.min;
      const currMax = data.daily[0].temp.max;

      currTemp.innerHTML = `${Math.round(temp)}°`;
      currImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"></img>`;
      currDescription.innerHTML = `${descript} / High ${Math.round(
        currMax
      )}°  Low ${Math.round(currMin)}°`;

      // Day 1
      const day1Name =
        `${today.getDay() + 1}` > 6
          ? `${weekday[0]}`
          : `${weekday[today.getDay() + 1]}`;
      const day1ImgData = data.daily[1].weather[0].icon;
      const day1Img = `<img src="https://openweathermap.org/img/wn/${day1ImgData}.png"></img>`;
      const day1Descrit = data.daily[1].weather[0].description;

      // Day 2
      const day2Name =
        `${today.getDay() + 1}` > 6
          ? `${weekday[0]}`
          : `${weekday[today.getDay() + 1]}`;
      const day2ImgData = data.daily[2].weather[0].icon;
      const day2Img = `<img src="https://openweathermap.org/img/wn/${day2ImgData}.png"></img>`;
      const day2Descrit = data.daily[2].weather[0].description;

      // Day 3
      const day3Name =
        `${today.getDay() + 2}` > 6
          ? `${weekday[0]}`
          : `${weekday[today.getDay() + 2]}`;
      const day3ImgData = data.daily[3].weather[0].icon;
      const day3Img = `<img src="https://openweathermap.org/img/wn/${day3ImgData}.png"></img>`;
      const day3Descrit = data.daily[3].weather[0].description;

      days.innerHTML = `<div id=day1> ${day1Name} </div><div id=day2> ${day2Name} </div><div id=day3> ${day3Name} </div>`;
      daysImg.innerHTML = `<div id=day1Img>${day1Img}</div><div id=day2Img>${day2Img}</div><div id=day3Img>${day3Img}</div>`;
      daysDescription.innerHTML = `<div id=day1> ${day1Descrit} </div><div id=day2> ${day2Descrit} </div><div id=day3> ${day3Descrit} </div>`;
    });
}

function Weather() {
  return (
    <>
      <div id="weather">
        <div id="current">
          <div id="currTemp">{getWeather()}</div>
          <div id="currImg"></div>
        </div>
        <div id="currDescription"></div>
        <div id="days">
          <div id="weatherDays"></div>
          <div id="daysImg"></div>
          <div id="daysDescription"></div>
        </div>
      </div>
    </>
  );
}

export default Weather;
