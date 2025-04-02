// ############################# Onload Functions ########################
function start() {
  startTime();
  greet();
  getWeather();
  dark();
}
// ############################# Settings ########################

const darkMode = document.getElementById("darkMode");

function dark() {
  if (darkMode.checked) {
    /* dark */
    document.querySelector(":root").style.setProperty("--text", "#dddddd");
    document.querySelector(":root").style.setProperty("--bg", "#21232b");
  } else if (!darkMode.checked) {
    /*  light */
    document.querySelector(":root").style.setProperty("--text", "#00000");
    document.querySelector(":root").style.setProperty("--bg", "#dddddd");
  }
  return;
}

function Welcome() {
  if (showWelcome.checked) {
    /* dark */
    document.querySelector(":root").style.setProperty("--text", "#dddddd");
    document.querySelector(":root").style.setProperty("--bg", "#21232b");
  } else if (!darkMode.checked) {
    /*  light */
    document.querySelector(":root").style.setProperty("--text", "#00000");
    document.querySelector(":root").style.setProperty("--bg", "#dddddd");
  }
  return;
}

const showWeather = document.getElementById("showWeather");
function Weather() {
  if (showWeather.checked) {
    document.querySelector("#weather").style.setProperty("display", "flex");
  } else if (!showWeather.checked) {
    document.querySelector("#weather").style.setProperty("display", "none");
  }
}

// ############################# CLOCK ########################

// future set up for toggle 12 and 24 hour
function startTime() {
  const today = new Date();
  let h = today.getHours() >= 12 ? today.getHours() % 12 : today.getHours();
  let m = today.getMinutes();
  let ampm = today.getHours() >= 12 ? "PM" : "AM";
  m = checkTime(m);
  //s = checkTime(s);
  document.getElementById("clock").innerHTML = `<h1> ${h}:${m} ${ampm}</h1>`;
  setTimeout(startTime, 1000);

  const weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = today.getDate();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();
  document.getElementById("date").innerHTML = `<h2> ${
    weekday[today.getDay() - 1]
  }, ${day}/${month}/${year}</h2>`;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

// ############################# Greeting ########################
function greet() {
  if (new Date().getHours() >= 13) {
    timeOfDay = "Afternoon";
  }

  if (new Date().getHours() <= 13) {
    timeOfDay = "Morning";
  }

  if (new Date().getHours() >= 17) {
    timeOfDay = "Evening";
  }

  document.getElementById("text").innerHTML = `Good ${timeOfDay}, Stuart`;
}

// ############################# search bar ########################

// works with enter too sshhh not sure how but its a feature!!
document
  .getElementById("searchBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let query = document.getElementsByClassName("search")[0].value;
    let url = `https://www.google.com/search?q=${query}`;
    window.location = url;
  });

/*

Save Data to Local Storage
localStorage.setItem(key, value);
Read Data from Local Storage
let lastname = localStorage.getItem(key);
Remove Data from Local Storage
localStorage.removeItem(key);
Remove All (Clear Local Storage)
localStorage.clear();
*/

/*
    const apiKey = "827cd00c74aa212544f43a7c47b3922a"; // Replace with your OpenWeather API key
    const city = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Weather Data:", data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
    //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
*/

// ############################# Weather API ########################

function getLocation() {
  const apiKey = "f7885e7e86b598f6edc06a41fbaaa6ab"; // Replace with your OpenWeather API key
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
  const apiKey = "f7885e7e86b598f6edc06a41fbaaa6ab";
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

      days.innerHTML = `<div id=day1> ${day1Name} </div><div id=day1Img>${day1Img}</div><div id=day1> ${day1Descrit} </div>`;
      daysImg.innerHTML = `<div id=day2> ${day2Name} </div><div id=day2Img>${day2Img}</div><div id=day2> ${day2Descrit} </div>`;
      daysDescription.innerHTML = `<div id=day3> ${day3Name} </div><div id=day3Img>${day3Img}</div><div id=day3> ${day3Descrit} </div>`;
    });
}

//   Calling weather 4 times a day i needed.

function newWeather() {
  if (new Date().getHours() === 6) {
    getWeather();
  }
  if (new Date().getHours() === 12) {
    getWeather();
  }
  if (new Date().getHours() === 15) {
    getWeather();
  }
  if (new Date().getHours() === 5) {
    getWeather();
  }
}
