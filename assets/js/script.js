const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let loaderValue = 0;

let intervel = setInterval(blurring, 30);
function blurring() {
  loaderValue++;
  if (loaderValue > 99) {
    clearInterval(intervel);
  }
  loadText.innerHTML = `${loaderValue}%`;
  loadText.style.opacity = scale(loaderValue, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(loaderValue, 0, 100, 30, 0)}px)`;
}
const scale = function (num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
