// your final clean JS:
const actions = document.querySelectorAll(".action");
const answers = document.querySelectorAll(".answer");
const icons = document.querySelectorAll(".toggle-icon");

icons.forEach((icon, i) => {
  icon.addEventListener("click", () => {
    answers[i].classList.toggle("hidden");
    
    if (answers[i].classList.contains("hidden")) {
      icons[i].src = "icon-plus.svg";
    } else {
      icons[i].src = "icon-minus.svg";
    }
  });
});