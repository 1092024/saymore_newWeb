var inkAni = document.getElementById("inkAni");
var txtEnter = document.getElementById("txtEnter");
var chineseTxt = document.getElementById("chineseTxt");
var engTxt = document.getElementById("engTxt");

inkAni.playbackRate = 2.0;

setTimeout(function () {
  txtEnter.classList.add("show");
}, 3000);

chineseTxt.addEventListener("click", () => {
  window.location.href = "chinese.html";
});

engTxt.addEventListener("click", () => {
  window.location.href = "english.html";
});
