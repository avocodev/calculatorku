import typeEffect from "./script/typeEffect.js";

typeEffect();

const startButton = document.querySelector(".js-start-button");
startButton.addEventListener("click", () => {
  document.querySelector(".calculator-main").style.display = "block";

  document.querySelector(".welcome-page-main").style.display = "none";
});

const homeButton = document.querySelector(".js-return-to-home-link");
homeButton.addEventListener("click", () => {
  document.querySelector(".calculator-main").style.display = "none";

  document.querySelector(".welcome-page-main").style.display = "block";
});
