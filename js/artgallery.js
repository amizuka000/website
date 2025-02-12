
//Load this js file for the art.html




/*=============== GALLERY LIGHTBOX============================+*/
// Open the Modal
function openModal() {
var x = window.matchMedia("(min-width: 500px)"); //media query to prevent modal on phones
if (x.matches) { // If media query matches
  document.getElementById("artmyModal").style.display = "block";
  //previously used to hide scroll button on open modal - didn't work
  //document.getElementById("scrollButton").style.display = "none";

  document.body.style.overflow = 'hidden';
  } else {
   document.getElementById("artmyModal").style.display = "none";
  }

}

// Close the Modal
function closeModal() {
  document.getElementById("artmyModal").style.display = "none";
  //document.getElementById("scrollButton").style.display = "";

  document.body.style.overflow = 'auto';

}




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("artmySlides");
  var dots = document.getElementsByClassName("artalt");
  //var captionText = document.getElementById("artcaption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;

}
