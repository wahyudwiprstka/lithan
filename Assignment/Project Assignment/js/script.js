$("document").ready(function(){
  // Dropdown Nav
  // $("nav li").mouseenter(function(){
  //   $(this).find(".dropdown-content").stop(true, true).slideDown(300);
  // });

  // $("nav li").mouseleave(function(){
  //   $(this).find(".dropdown-content").stop(true, true).slideUp(300);
  // });

  $("nav ul li").hover(function(){
    $(this).find(".dropdown-content").slideDown(300).css("display", "flex");
    $(this).find(".fa-angle-right").css("transform", "rotate(90deg)");
  },
  function(){
    $(this).find(".dropdown-content").slideUp(300);
    $(this).find(".fa-angle-right").css("transform", "rotate(0deg)");
  });
});

// Navbar Toggle
var prevScrollPos = window.pageYOffset;
window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  if(prevScrollPos > currentScrollPos){
    document.querySelector(".head").style.top = "0px";
  }else{
    document.querySelector(".head").style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
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
