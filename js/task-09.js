function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color')
const body = document.querySelector('body')

changeColorBtn.addEventListener('click', handlerClick)

function handlerClick(evt) {
  color.textContent = getRandomHexColor()
  body.style.backgroundColor = color.textContent
}