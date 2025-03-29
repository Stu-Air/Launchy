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

function welcome() {
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

function start() {
  startTime();
  welcome();
}

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
