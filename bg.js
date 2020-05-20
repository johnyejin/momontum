const body = document.querySelector("body");

const IMAGE_NUM = 3;

function paintImg(imgNumber) {
  const img = new Image();
  img.src = `images/${imgNumber + 1}.JPG`;
  img.classList.add("bgImg");
  body.prepend(img);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUM);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImg(randomNumber);
}

init();