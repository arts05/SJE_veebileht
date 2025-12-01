// Üleskerimis nupp
const scrollTop = function () {
};
scrollTop();

const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "Ülesse&nbsp;&uarr;";
scrollBtn.setAttribute("id", "scroll-btn");
document.body.appendChild(scrollBtn);

const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

const scrollWindow = function () {  
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 50);
      scrollWindow();
    }, 10);
  }
};
scrollBtn.addEventListener("click", scrollWindow);



// Header kaob ära
let viimane = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const praegu = window.scrollY;
  if (praegu > viimane && praegu > 1150) {
    header.classList.add("peidus");
  } 
  else {
    header.classList.remove("peidus");
  }
  viimane = praegu;
});
