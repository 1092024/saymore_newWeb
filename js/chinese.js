var frontAni = document.getElementById("frontAni");
var gotoMenu = document.getElementById("gotoMenu");
var introduce = document.getElementById("introduce");
var toTop = document.getElementById("toTop");
var menu = document.getElementById("menu");
var menuAni = document.getElementById("menuAni");
var menuOptions = document.getElementById("menuOptions");
var optionMany = document.getElementById("optionMany");
var paragraphs = optionMany.querySelectorAll("p");

// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
// var btn4 = document.getElementById("btn4");
// var introduce = document.getElementById("introduce");
// var member = document.getElementById("member");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// var isMobile = windowWidth <= 767;
// var isIpad = windowWidth < 991 && windowWidth > 768;
var isPC = windowWidth > 992;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  menu.style.display = "block";
  gotoMenu.style.display = "none";
  frontAni.loop = true;
}

// frontAni.addEventListener("ended", () => {
//   // if (isPC && !isMobile) {
//   //   frontAni.style.opacity = "0.4";
//   //   setTimeout(function () {
//   //     gotoMenu.style.display = "block";
//   //     menu.style.display = "block";
//   //   }, 2000);
//   // } else {
//   //   frontAni.style.opacity = "1";
//   // }
//   if (isPC && !isMobile) {
//     gotoMenu.style.display = "block";
//   }

//   // menu.style.display = "block";
// });

function fadeInParagraphs() {
  paragraphs.forEach(function (paragraph, index) {
    setTimeout(function () {
      paragraph.classList.add("show");
    }, index * 500);
  });
}

menu.addEventListener("click", () => {
  gotoMenu.style.display = "none";
  menuOptions.style.display = "block";
  fadeInParagraphs();
  document.body.style.overflow = "hidden";
  menuAni.style.display = "block";
  menuAni.play();
});

gotoMenu.addEventListener("click", () => {
  introduce.scrollIntoView({ behavior: "smooth" });
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    toTop.style.display = "block";
    menu.style.display = "block";
  } else {
    toTop.style.display = "none";
    menu.style.display = "none";
  }
});

// btn1.addEventListener("click", () => {
//   introduce.scrollIntoView({ behavior: "smooth" });
// });

// btn2.addEventListener("click", () => {
//   window.location.href = "inkdrop.html";
// });

// btn3.addEventListener("click", () => {
//   member.scrollIntoView({ behavior: "smooth" });
// });

// btn4.addEventListener("click", () => {
//   window.location.href = "experience.html";
// });
