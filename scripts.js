const menub = document.querySelector("menub");
const xmark = document.querySelector("xmark");
const menuOuvert = document.querySelector("menuOuvert");

menub.addEventListener("click", () => {
  menub.classList.toggle("displayNone");
  xmark.className = "xmark displayFlex";
  menuOuvert.className = "menuOuvert displayFlex";
});
xmark.addEventListener("click", () => {
  menub.className = "menub displayFlex";
  xmark.className = "xmark displayNone";
  menuOuvert.className = "menuOuvert displayNone";
});
