import React from "react";

function Settings() {
  return (
    <>
      <h1>Settings</h1>
      <form action="">
        <p id="name">
          Name: <input type="text"></input>
        </p>
        <p id="name">
          Background Image url: <input type="text"></input>
        </p>
        <p id="name">
          City: <input type="text"></input>
        </p>
        <p id="weatherApi">
          Open Weather Api Key: <input type="text"></input>
        </p>
        <div>
          Dark Mode <input type="checkbox" id="checkboxInput" />
          <label for="checkboxInput" class="toggleSwitch"></label>
        </div>
      </form>
    </>
  );
}

export default Settings;
