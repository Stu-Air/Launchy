import React from "react";

function Bookmarks() {
  return (
    <>
      <div class="folder">
        <div class="folderHeader">
          <div class="read">
            <i class="fa-solid fa-book-open"></i> READ
            <a href="https://tldr.tech">
              <div class="link">
                <img
                  class="linkImg"
                  src="https://www.google.com/s2/favicons?domain=https://tldr.tech/&sz=128"
                ></img>
                tldr.tech
              </div>
            </a>
            <a href="https://hackaday.com">
              <div class="link">
                <img
                  class="linkImg"
                  src="https://www.google.com/s2/favicons?domain=https://hackaday.com/&sz=128"
                ></img>
                hackaday
              </div>
            </a>
            <a href="https://www.reddit.com/r/unixporn/">
              <div class="link">
                <img
                  class="linkImg"
                  src="https://www.google.com/s2/favicons?domain=https://www.reddit.com/r/unixporn/&sz=128"
                ></img>
                r/unixporn
              </div>
            </a>
            <a href="https://dev.to/">
              <div class="link">
                <img
                  class="linkImg"
                  src="https://www.google.com/s2/favicons?domain=https://www.dev.to/&sz=128"
                ></img>
                dev.to
              </div>
            </a>
          </div>

          <div class="watch">
            <i class="fa-solid fa-circle-play"></i> WATCH
            <a href="https://www.youtube.com/">
              <div class="link">
                <img
                  class="linkImg"
                  src="https://www.google.com/s2/favicons?domain=https://www.youtube.com/&sz=128"
                ></img>
                youtube
              </div>
            </a>
          </div>

          <div class="game">
            <i class="fa-solid fa-gamepad"></i> GAME
            <div class="link">https://en.boardgamearena.com</div>
            <div class="link">https://www.chess.com</div>
            <div class="link">https://cssbattle.dev</div>
          </div>

          <div class="shop">
            <i class="fa-solid fa-bag-shopping"></i> SHOP
            <div class="link">https://www.aliexpress.com</div>
            <div class="link">https://www.amazon.co.uk</div>
          </div>

          <div class="tools">
            <i class="fa-solid fa-screwdriver-wrench"></i> TOOLS
            <div class="link">https://claude.ai</div>
            <div class="link">https://chatgpt.com</div>
            <div class="link">https://picsum.photos</div>
            <div class="link">https://farbvelo.elastiq.ch</div>
          </div>

          <div class="devTools">
            <i class="fa-solid fa-terminal"></i> DEV TOOLS
            <div class="link">https://it-tools.tech</div>
            <div class="link">https://picsvg.com</div>
            <div class="link">https://carbon.now.sh</div>
            <div class="link">https://favicon.io</div>
          </div>
        </div>
      </div>
      Extras to add settings page different themes, name
      <br />
      all pages should have some animation <br />
      maybe save to json file and have object <br />
      fancy font and nice images maybe from wallpaper in dotfiles
    </>
  );
}

export default Bookmarks;
