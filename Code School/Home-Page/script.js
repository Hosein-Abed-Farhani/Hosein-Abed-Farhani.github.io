
//scroll bar

window.onscroll = function() {scroll()};

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) *  100;
  document.querySelector(".scroll-bar").style.width = scrolled + "%";
}

let sc = "10";

if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
  document.querySelector("#scrol-top").style.display = "block";
}
else {
  document.querySelector("#scrol-top").style.display = "none";
}