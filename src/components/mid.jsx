import React from "react";

/*
// works with enter too sshhh not sure how but its a feature!!
document
  .getElementById("searchBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let query = document.getElementsByClassName("search")[0].value;
    let url = `https://www.google.com/search?q=${query}`;
    window.location = url;
  });

//Save Data to Local Storage
localStorage.setItem(key, value);
//Read Data from Local Storage
let lastname = localStorage.getItem(key);
//Remove Data from Local Storage
localStorage.removeItem(key);
//Remove All (Clear Local Storage)
localStorage.clear();
*/

const gitStat1 = () => {
  let username = "Stu-Air";
  if (username) {
    return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&locale=en&layout=compact&bg_color=383c4a&text_color=7c818c&icon_color=5294e2&title_color=5294e2&hide_rank=true&line_height=20`;
  }
};
const gitStat2 = () => {
  let username = "Stu-Air";
  if (username) {
    return `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&bg_color=383c4a&text_color=7c818c&icon_color=5294e2&title_color=5294e2&card_height=500`;
  }
};

function Mid() {
  return (
    <>
      <div class="git">
        <img src={gitStat1()} />
        <img src={gitStat2()} />
      </div>
      <form
        id="search"
        class="engine"
        action="https://www.google.com/search?q="
      >
        <i class="fa-brands fa-google"></i>
        <input
          class="search"
          type="text"
          placeholder="Google Search"
          required
        />
        <button type="submit" id="searchBtn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
}

export default Mid;
