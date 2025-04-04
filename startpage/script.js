// ############################# Onload Functions ########################
function start() {
  startTime();
  greet();
  getWeather();
  showDark();
  showWelcome();
  showGreet();
  showWeather();
  showProfile();
  showTimeDate();
  showBookmarks();
  showGitStats();
  showSearchBar();
}
// ############################# Settings ########################

const Mode = document.getElementById("showDark");
function showDark() {
  if (Mode.checked) {
    /* dark */
    document.querySelector(":root").style.setProperty("--text", "#dddddd");
    document.querySelector(":root").style.setProperty("--bg", "#21232b");
    document
      .querySelector(":root")
      .style.setProperty("--blurColor", "#21232b30");
  } else if (!Mode.checked) {
    /*  light */
    document.querySelector(":root").style.setProperty("--text", "#00000");
    document.querySelector(":root").style.setProperty("--bg", "#dddddd");
    document
      .querySelector(":root")
      .style.setProperty("--blurColor", "#dddddd30");
  }
  return;
}

const Welcome = document.getElementById("showWelcome");
function showWelcome() {
  if (Welcome.checked) {
    document.querySelector("#welcome").style.setProperty("display", "flex");
  } else if (!Welcome.checked) {
    document.querySelector("#welcome").style.setProperty("display", "none");
  }
  return;
}

const Greet = document.getElementById("showGreet");
function showGreet() {
  if (Greet.checked) {
    document.querySelector("#greet").style.setProperty("display", "flex");
  } else if (!Greet.checked) {
    document.querySelector("#greet").style.setProperty("display", "none");
  }
  return;
}

const Weather = document.getElementById("showWeather");
function showWeather() {
  if (Weather.checked) {
    document.querySelector("#weather").style.setProperty("display", "flex");
  } else if (!Weather.checked) {
    document.querySelector("#weather").style.setProperty("display", "none");
  }
  return;
}

const Profile = document.getElementById("showProfile");
function showProfile() {
  if (Profile.checked) {
    document.querySelector("#profile").style.setProperty("display", "flex");
  } else if (!Profile.checked) {
    document.querySelector("#profile").style.setProperty("display", "none");
  }
  return;
}
const timeDate = document.getElementById("showTimeDate");
function showTimeDate() {
  if (timeDate.checked) {
    document.querySelector(".timeDate").style.setProperty("display", "flex");
  } else if (!timeDate.checked) {
    document.querySelector(".timeDate").style.setProperty("display", "none");
  }
  return;
}

const gitStats = document.getElementById("showGitStats");
function showGitStats() {
  if (gitStats.checked) {
    document.querySelector("#git").style.setProperty("display", "flex");
  } else if (!gitStats.checked) {
    document.querySelector("#git").style.setProperty("display", "none");
  }
  return;
}
const searchBar = document.getElementById("showSearchBar");
function showSearchBar() {
  if (searchBar.checked) {
    document.querySelector("#search").style.setProperty("display", "flex");
  } else if (!searchBar.checked) {
    document.querySelector("#search").style.setProperty("display", "none");
  }
  return;
}

const Bookmarks = document.getElementById("showBookmarks");
function showBookmarks() {
  if (Bookmarks.checked) {
    document.querySelector("#bookmarks").style.setProperty("display", "flex");
  } else if (!Bookmarks.checked) {
    document.querySelector("#bookmarks").style.setProperty("display", "none");
  }
  return;
}

document.getElementById("settingSave").addEventListener("click", () => {
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem(
    "background",
    document.getElementById("background").value
  );
  localStorage.setItem("smallImg", document.getElementById("smallImg").value);
  localStorage.setItem("owAPI", document.getElementById("apiKey").value);
  localStorage.setItem("gitName", document.getElementById("gitStats").value);

  //  const folders = [read];
  //  localStorage.setItem("folders", JSON.stringify(folders));
  //  localStorage.setItem(`folders:test`, JSON.stringify(read));
});
// set settings
// name is already set in below in greet function

document
  .querySelector("#welcome")
  .style.setProperty(
    "background-image",
    `url("${localStorage.getItem("background")}")`
  );

document.getElementById(
  "profileImg"
).innerHTML = `<img id="profile" src="${localStorage.getItem("smallImg")}" />`;
// Open Weather API key is already set in weather function

document.getElementById(
  "git"
).innerHTML = `<img src="https://github-readme-stats.vercel.app/api?username=${localStorage.getItem(
  "gitName"
)}&show_icons=true&locale=en&layout=compact&bg_color=383c4a&text_color=7c818c&icon_color=5294e2&title_color=5294e2&hide_rank=true&line_height=20" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${localStorage.getItem(
  "gitName"
)}&layout=compact&bg_color=383c4a&text_color=7c818c&icon_color=5294e2&title_color=5294e2&card_height=500" />`;

// ############################# CLOCK ########################

// future set up for toggle 12 and 24 hour
function startTime() {
  const today = new Date();
  let h = today.getHours() < 12 ? today.getHours() % 12 : today.getHours();
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

  if (new Date().getHours() >= 21) {
    timeOfDay = "Night";
  }
  const greetName = !localStorage.getItem("name")
    ? " "
    : `, ${localStorage.getItem("name")}`;
  document.getElementById("greet").innerHTML = `Good ${timeOfDay}${greetName}`;
}

// ############################# search bar ########################

const engine = document.getElementById("searchBar").value;
document.getElementsByClassName(
  "search"
)[0].placeholder = `Searching with ${engine}`;
document.getElementById(
  "searchIcon"
).innerHTML = `<img id="searchImg" src='https://www.google.com/s2/favicons?domain=https://${engine}/&sz=128'></img>`;

// works with enter too, sshhh not sure how but its a feature!!
document
  .getElementById("searchBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let query = document.getElementsByClassName("search")[0].value;
    let url = `https://${engine}/search?q=${query}`;
    window.location = url;
  });

/*

//Save Data to Local Storage
localStorage.setItem(key, value);

//Read Data from Local Storage
localStorage.getItem(key);

//Remove Data from Local Storage
localStorage.removeItem(key);

//Remove All (Clear Local Storage)
localStorage.clear();
*/

// ############################# Weather API ########################

function getLocation() {
  const apiKey = `${localStorage.getItem("owAPI")}`;
  const zipCode = document.getElementById("postcode").value;
  const countryCode = document.getElementById("countryCode").value;
  const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("lat", data.lat);
      localStorage.setItem("lon", data.lon);
    });
}

function getWeather() {
  getLocation();
  const apiKey = `${localStorage.getItem("owAPI")}`; // inactive Testing only
  const lat = localStorage.getItem("lat");
  const lon = localStorage.getItem("lon");
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

/*function newWeather() {
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
*/
