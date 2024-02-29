let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = $(".mySlides");
  let dots = $(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
document.addEventListener("keypress", function(event) {

  perform(event.key);

  buttonAnimation(event.key);

});
function perform(key) {

  switch (key) {
    case "37":
    
      break;

    case "39":

      break;


    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}













// let ball = document.getElementById("ballID");
//   var myVar = setInterval(spostaDiv, 90);
//   var margin = 0;
//
//   let l = window.screen.width;
//   let w = 1300;
//
//   function spostaDiv() {
//     if (margin >= l) {
//       margin = -w;
//     }
//     else {
//       ball.style.marginLeft = margin + "px";
//     }
//         margin -= 10;
//   }
// let ball = document.getElementById("ballID");
//
//       var myVar = setInterval(spostaDiv, 90);
//       var margin = 0;
//
//       let l = window.screen.width;
//       let w = 1300;
//
//       function spostaDiv() {
//           console.log(w);
//
//       }
