const titleUpper = document.querySelector(".welcome-title-upper");
const titleLower = document.querySelector(".welcome-title-lower");
const strTitleUpper = titleUpper.textContent;
const strTitleLower = titleLower.textContent;
const splitTitleUpper = strTitleUpper.split("");
const splitTitleLower = strTitleLower.split("");
titleUpper.textContent = "";
titleLower.textContent = "";

for (let i = 0; i < splitTitleUpper.length; i++) {
  titleUpper.innerHTML += "<span>" + splitTitleUpper[i] + "</span>";
}

for (let i = 0; i < splitTitleLower.length; i++) {
  titleLower.innerHTML += "<span>" + splitTitleLower[i] + "</span>";
}

let charUpper = 0;
let timerUpper = setInterval(onTickUpper, 50);

function onTickUpper() {
  const spanUpper = titleUpper.querySelectorAll("span")[charUpper];
  spanUpper.classList.add("fadeUpper");
  charUpper++;
  if (charUpper === splitTitleUpper.length) {
    completeUpper();
    return;
  }
}

function completeUpper() {
  clearInterval(timerUpper);
  timerUpper = null;
  let charLower = 0;
  let timerLower = setInterval(onTickLower, 50);

  function onTickLower() {
    const spanLower = titleLower.querySelectorAll("span")[charLower];
    spanLower.classList.add("fadeLower");
    charLower++;
    if (charLower === splitTitleLower.length) {
      completeLower();
      return;
    }
  }

  function completeLower() {
    clearInterval(timerLower);
    timerLower = null;
  }
}
