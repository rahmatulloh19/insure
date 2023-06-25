var elHeader = document.querySelector(".site-header"); 
var elButton = document.querySelector(".site-header__btn"); 

elButton.addEventListener("click", () => {
  elHeader.classList.toggle("open")
})