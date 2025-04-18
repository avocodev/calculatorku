let i = 0;
const paragraphElement = document.querySelector(".tooltip-message > p");
let txt = "Selamat datang di Calculatorku";

function typeEffect() {
  if (i < txt.length) {
    paragraphElement.innerHTML += txt.charAt(i);
    i++;

    setTimeout(() => {
      typeEffect();
    }, 50);
  }
}

export default typeEffect;
