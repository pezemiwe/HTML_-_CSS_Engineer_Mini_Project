let hamIcon = document.querySelector(".ham__icon");
let menuList = document.querySelector(".menu2");
let header = document.querySelector("header");

hamIcon.addEventListener("click", function () {
  if (menuList.classList.contains("active")) {
    header.classList.add("active");
    menuList.classList.remove("active");
  } else {
    header.classList.remove("active");
    menuList.classList.add("active");
  }
});

const prevBtn = document.getElementsByClassName("arrow__left")[0];
const nextBtn = document.getElementsByClassName("arrow__right")[0];
const slider = document.getElementsByClassName("slide__boxes")[0];
const slidesCount = document.getElementsByClassName("slide__box").length;

let index = 0;
const scrollWidth =
  document.body.clientWidth <= 645 ? document.body.clientWidth * 0.9 + 10 : 645;
handleDisable();
nextBtn.onclick = () => slideCards("forward");

prevBtn.onclick = () => slideCards("backward");

function slideCards(direction) {
  if (direction === "forward") {
    if (index < slidesCount - 1) {
      index++;
    }
  } else {
    if (index > 0) {
      index--;
    }
  }

  const scrollIndex = index * scrollWidth;
  slider.scroll({
    top: 0,
    left: scrollIndex,
    behavior: "smooth",
  });
  handleDisable();
  handlePaginate();
}

function handleDisable() {
  const arrowFade = document.getElementsByClassName("arrow_fade");
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slidesCount - 1;
}
function handlePaginate() {
  [...document.getElementsByClassName("change__ellipse")].forEach(
    (change__ellipse, i) => {
      if (index === i) {
        change__ellipse.classList.add("active");
      } else {
        change__ellipse.classList.remove("active");
      }
    }
  );
}
