const body = document.querySelector('body');
const IMAGE_NUMBER = 6;

function getRandom() {
  const randomImageNumber = Math.round(Math.random() * IMAGE_NUMBER);
  if (randomImageNumber > 0 && randomImageNumber <= IMAGE_NUMBER) {
    return randomImageNumber;
  }
  else {
    return 1;
  }
}

function showImage(number) {
  const img = new Image();
  img.src = `images/${number}.jpg`;
  img.classList.add('bgImage');
  body.prepend(img);

}

function init() {
  const  randomImageNumber = getRandom();
  showImage(randomImageNumber);
}

init();