//scroll bar

window.onscroll = function () {
  scroll();
};

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-bar").style.width = scrolled + "%";
}

let sc = "10";

// scroll float
// let myscroll = document.querySelector("html");
// let Scroll_Top = myscroll.scrollTop;
// if (Scroll_Top <= 50) {
//   document.querySelector(".float-btn").style.display = "none";
// }
// else{
//   document.querySelector(".float-btn").style.display = "flex";
// }
// image slider

let img_num = 1;
function next() {
  img_num++;
  if (img_num == 6) {
    img_num = 1;
  }

  if (img_num == 1) {
    document.querySelector("#image-1").style.display = "block";
    document.querySelector("#image-2").style.display = "none";
    document.querySelector("#image-3").style.display = "none";
    document.querySelector("#image-4").style.display = "none";
    document.querySelector("#image-5").style.display = "none";
    document.querySelector("#p-slide").innerHTML = "1/5";
    document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-2").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-3").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-4").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-5").style.background = "rgb(140, 140, 140)";
  }

  if (img_num == 2) {
    document.querySelector("#image-1").style.display = "none";
    document.querySelector("#image-2").style.display = "block";
    document.querySelector("#image-3").style.display = "none";
    document.querySelector("#image-4").style.display = "none";
    document.querySelector("#image-5").style.display = "none";
    document.querySelector("#p-slide").innerHTML = "2/5";
    document.querySelector("#circle-1").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-3").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-4").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-5").style.background = "rgb(140, 140, 140)";
  }

  if (img_num == 3) {
    document.querySelector("#image-1").style.display = "none";
    document.querySelector("#image-2").style.display = "none";
    document.querySelector("#image-3").style.display = "block";
    document.querySelector("#image-4").style.display = "none";
    document.querySelector("#image-5").style.display = "none";
    document.querySelector("#p-slide").innerHTML = "3/5";
    document.querySelector("#circle-1").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-2").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-4").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-5").style.background = "rgb(140, 140, 140)";
  }

  if (img_num == 4) {
    document.querySelector("#image-1").style.display = "none";
    document.querySelector("#image-2").style.display = "none";
    document.querySelector("#image-3").style.display = "none";
    document.querySelector("#image-4").style.display = "block";
    document.querySelector("#image-5").style.display = "none";
    document.querySelector("#p-slide").innerHTML = "4/5";
    document.querySelector("#circle-1").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-2").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-3").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-5").style.background = "rgb(140, 140, 140)";
  }

  if (img_num == 5) {
    document.querySelector("#image-1").style.display = "none";
    document.querySelector("#image-2").style.display = "none";
    document.querySelector("#image-3").style.display = "none";
    document.querySelector("#image-4").style.display = "none";
    document.querySelector("#image-5").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "5/5";
    document.querySelector("#circle-1").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-2").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-3").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-4").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
  }
}

function back() {
  img_num--;
  if (img_num == 0) {
    img_num = 5;
  }

  if (img_num == 1) {
    document.querySelector("#image-1").style.display = "block";
    document.querySelector("#image-2").style.display = "none";
    document.querySelector("#image-3").style.display = "none";
    document.querySelector("#image-4").style.display = "none";
    document.querySelector("#image-5").style.display = "none";
    document.querySelector("#p-slide").innerHTML = "1/5";
    document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-2").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-3").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-4").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-5").style.background = "rgb(140, 140, 140)";
  }

  if (img_num == 2) {
    document.querySelector("#image-1").style.display = "none";
    document.querySelector("#image-2").style.display = "block";
    document.querySelector("#image-3").style.display = "none";
    document.querySelector("#image-4").style.display = "none";
    document.querySelector("#image-5").style.display = "none";
    document.querySelector("#p-slide").innerHTML = "2/5";
    document.querySelector("#circle-1").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-3").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-4").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-5").style.background = "rgb(140, 140, 140)";
  }

  if (img_num == 3) {
    document.querySelector("#image-1").style.display = "none";
    document.querySelector("#image-2").style.display = "none";
    document.querySelector("#image-3").style.display = "block";
    document.querySelector("#image-4").style.display = "none";
    document.querySelector("#image-5").style.display = "none";
    document.querySelector("#p-slide").innerHTML = "3/5";
    document.querySelector("#circle-1").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-2").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-4").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-5").style.background = "rgb(140, 140, 140)";
  }

  if (img_num == 4) {
    document.querySelector("#image-1").style.display = "none";
    document.querySelector("#image-2").style.display = "none";
    document.querySelector("#image-3").style.display = "none";
    document.querySelector("#image-4").style.display = "block";
    document.querySelector("#image-5").style.display = "none";
    document.querySelector("#p-slide").innerHTML = "4/5";
    document.querySelector("#circle-1").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-2").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-3").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-5").style.background = "rgb(140, 140, 140)";
  }

  if (img_num == 5) {
    document.querySelector("#image-1").style.display = "none";
    document.querySelector("#image-2").style.display = "none";
    document.querySelector("#image-3").style.display = "none";
    document.querySelector("#image-4").style.display = "none";
    document.querySelector("#image-5").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "5/5";
    document.querySelector("#circle-1").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-2").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-3").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-4").style.background = "rgb(140, 140, 140)";
    document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
  }
}

setInterval(next, 3000);
