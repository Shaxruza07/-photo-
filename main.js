const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const slide = document.getElementById("slide");
const showNumber = document.getElementById("showNumber");
let input = document.querySelector("#input");
let searchBtn = document.querySelector("#search");
let text = document.querySelector("#text")

let imgs = ["./images/image-one.jpg","./images/image-two.jpg","./images/image-three.jpg", "./images/image-four.avif","./images/image-five.jpg"]

let active = 0;

showNumber.innerHTML = active +1

setInterval(function() {
  active++;

  if (active >= imgs.length) {
    active = 0;
  }

  slide.src = imgs[active];
  showNumber.innerHTML = active +1
  text.textContent = ""
},2000)

btnRight.addEventListener("click", () => {
  active++;

  if (active >= imgs.length) {
    active = 0;
  }

  slide.src = imgs[active];
  showNumber.innerHTML = active +1
});

btnLeft.addEventListener("click", () => {
  active--;

  if (active < 0) {
    active = imgs.length - 1;
  }

  slide.src = imgs[active];
  showNumber.innerHTML = active +1
});

searchBtn.addEventListener("click", () => {
  let number = input.value - 1

  if(imgs[number]) {
    slide.src = imgs[number]
    showNumber.innerHTML = number + 1
    input.value = " "
  } else {
    text.textContent = "This image does not exist"
  }
})

