const left = document.querySelector("#arrow_left");
const right = document.querySelector("#arrow_right");
const slider = document.querySelector(".slider");
const img = document.querySelectorAll(".img");
const bottom = document.querySelector(".bottom");
let slideNumber = 1;
const len = img.length;

for (let i = 0; i < len; i++) {
  const div = document.createElement("div");
  div.className = "btn";
  bottom.appendChild(div);
}
const buttons = document.querySelectorAll(".btn");
buttons[0].style.backgroundColor = "#fff";
const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "#fff";
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};
const FirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const lastSlide = () => {
  slider.style.transform = `translateX(-${(len - 1) * 800}px)`;
  slideNumber = len;
};
const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "#fff";
};
right.addEventListener("click", () => {
  slideNumber < len ? nextSlide() : FirstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  slideNumber >= 1 ? prevSlide() : lastSlide();
  changeColor();
});
