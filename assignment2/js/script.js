// Transparent Nav
let navbar = document.querySelector(".head");
window.onscroll = () => {
  if(window.scrollY > 50){
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
}

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Slideshow Functions
function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if(n > slides.length){
    slideIndex = 1;
  }

  if(n < 1){
    slideIndex = slides.length;
  }

  for(i=0; i<slides.length; i++){
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlides(n){
  showSlides(slideIndex = n);
}