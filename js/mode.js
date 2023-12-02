const body = document.querySelector("body");
const darkModeBtn = document.querySelector(".dark-mode-btn");

const lightModeImg = document.querySelector(".light-mode-img");
const DarkModeImg = document.querySelector(".dark-mode-img");

const lightArrow = document.querySelector(".light-back-arrow");
const darkArrow = document.querySelector(".dark-back-arrow");

// ------------------------------DarkMode------------------------------

function DarkMode() {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
  lightModeImg.classList.toggle("hidden");
  DarkModeImg.classList.toggle("hidden");
  lightArrow.classList.toggle("hidden");
  darkArrow.classList.toggle("hidden");
}

darkModeBtn.addEventListener("click", DarkMode);

const savedDarkMode = localStorage.getItem("dark-mode");
if (savedDarkMode === "true") {
  DarkMode();
}
