var frontAni = document.getElementById("frontAni");
var gotoMenu = document.getElementById("gotoMenu");
var introduce = document.getElementById("introduce");
var toTop = document.getElementById("toTop");
var menu = document.getElementById("menu");
var menuAni = document.getElementById("menuAni");
var menuOptions = document.getElementById("menuOptions");
var optionMany = document.getElementById("optionMany");
var paragraphs = optionMany.querySelectorAll("p");
var special = document.getElementById("special");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    toTop.style.display = "block";
    menu.style.display = "block";
  } else {
    toTop.style.display = "none";
    menu.style.display = "none";
  }
});
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function fadeInParagraphs() {
  paragraphs.forEach(function (paragraph, index) {
    setTimeout(function () {
      paragraph.classList.add("show");
    }, index * 500);
  });
}

menu.addEventListener("click", () => {
  menuOptions.style.display = "block";
  special.style.display = "none";
  fadeInParagraphs();
  document.body.style.overflow = "hidden";
  menuAni.style.display = "block";
  menuAni.play();
});
