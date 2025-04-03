import React, { useState, useEffect } from "react";
import Weather from "./weather";

function clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let h = time.getHours() % 12 || 12;
    const m = time.getMinutes();
    const ampm = time.getHours() <= 12 ? "AM" : "PM";

    return `${h}:${padZero(m)} ${ampm}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return <h1>{formatTime()}</h1>;
}

// DAY & DATE PICKER
function date() {
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
  let day = today.getDate();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();
  //document.getElementById("date").innerHTML =
  return (
    <h2>
      {" "}
      {weekday[today.getDay() - 1]}, {day}/{month}/{year}
    </h2>
  );
}

// TIME OF DAY PICKER
function greet() {
  let timeOfDay = "";
  if (new Date().getHours() >= 12) {
    timeOfDay = "Afternoon";
  }
  if (new Date().getHours() <= 12) {
    timeOfDay = "Morning";
  }
  if (new Date().getHours() >= 17) {
    timeOfDay = "Evening";
  }

  return <h1 id="text"> Good {timeOfDay}, Stuart </h1>;
}

function Welcome() {
  return (
    <>
      <div id="welcome">
        {greet()}
        <div class="imgTimeDate">
          <Weather />
          <img
            class="profile"
            src="https://avatars.githubusercontent.com/u/99331221"
          ></img>
          <div class="timeDate">
            <div id="clock">{clock()}</div>
            <div id="date">{date()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
