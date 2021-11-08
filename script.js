var banner = document.getElementById("banner");
var bannerDark = document.getElementById("banner-dark");
var loadingSquares = document.getElementById("loading-squares");
var modal = document.getElementById("myModal");

let count = 0;

function rollOver() {
  count++;
  if (count > 2) {
    bannerDark.style.backgroundColor = "rgba(0,0,0,0.6)";
  }

  if (count > 8) {
    bannerDark.style.backgroundColor = "rgba(0,0,0,0.9)";
    loadingSquares.style.display = "block";
  }

  if (count > 15) {
    console.log(count);
    console.log(count);    
    modal.style.display = "block";
    banner.style.display = "none";
    count = 0;
  }
}

// close modal by x
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
  banner.style.display = "block";
  bannerDark.style.backgroundColor = "rgba(0,0,0,0)";
  loadingSquares.style.display = "none";
};

// close modal by clicking oustide window
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    banner.style.display = "block";
    bannerDark.style.backgroundColor = "rgba(0,0,0,0)";
    loadingSquares.style.display = "none";
  }
};
