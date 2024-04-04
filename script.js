function toggleFullScreen() {
  var elem = document.documentElement;
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
var video = document.getElementById("mainViewVideo");
var webVer = document.getElementById("webVer");
var btnPage = document.getElementById("btnPage");
var webChinese = document.getElementById("webChinese");
var enterWeb = document.getElementById("enterWeb");

document.addEventListener("fullscreenchange", function () {
  video.style.display = "block";
  if (document.fullscreenElement) {
    video.play(); // 進入全螢幕後播放視頻
  } else {
    video.pause(); // 退出全螢幕時暫停視頻
  }
});

video.addEventListener("ended", () => {
  video.style.opacity = "0.2";
  webVer.style.display = "block";
});

webChinese.addEventListener("click", () => {
  enterWeb.style.display = "none";
  video.style.display = "none";
  webVer.style.display = "none";
  btnPage.style.display = "block";
});
