$("document").ready(function(){
  $("nav ul li").hover(function(){
    $(this).find(".dropdown-content").stop(true, true).slideDown(300).css("display", "flex");
    $(this).find(".fa-angle-right").css("transform", "rotate(90deg)");
  },
  function(){
    $(this).find(".dropdown-content").slideUp(300);
    $(this).find(".fa-angle-right").css("transform", "rotate(0deg)");
  });
});

// Navbar Toggle
// var prevScrollPos = window.pageYOffset;
// window.onscroll = function(){
//   var currentScrollPos = window.pageYOffset;
//   if(prevScrollPos > currentScrollPos){
//     document.querySelector(".head").style.top = "0px";
//   }else{
//     document.querySelector(".head").style.top = "-100px";
//   }
//   prevScrollPos = currentScrollPos;
// }


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

function topnavClick(){
  if($(".topnav").css("display") === "none"){
    $(".topnav").slideDown(300).css("display", "flex").css("visibility", "visible");
    $("div.course-detail, div.course-schedule").css("display", "none");
  }else{
    $(".topnav").slideUp(300).css("display", "none");
  }
  
}

function store(){
  var name = $("#fname").val() + " " + $("#lname").val();
  var email = $("#email").val();
  var phoneNumber = $("#phoneNumber").val();
  var address  = $("#address").val();
  var course = $("#course").val();
  
  var data = {
    "person":[
      {
        "name": name,
        "email": email,
        "phoneNumber": phoneNumber,
        "address": address,
        "course": course
      }
    ]
  }

  if(localStorage.getItem("data") === null){
    localStorage.setItem("data", JSON.stringify(data));
  }else{
    var arr = JSON.parse(localStorage.getItem("data"));
    arr["person"].push({
      "name": name,
      "email": email,
      "phoneNumber": phoneNumber,
      "address": address,
      "course": course
    });
    localStorage.setItem("data", JSON.stringify(arr));
  }
}

function listEdit(){
  var index = localStorage.getItem("editIndex");
  index = parseInt(index);
  var name = $("#fname").val() + " " + $("#lname").val();
  var email = $("#email").val();
  var phoneNumber = $("#phoneNumber").val();
  var address  = $("#address").val();
  var course = $("#course").val();
  
  var data = {
        "name": name,
        "email": email,
        "phoneNumber": phoneNumber,
        "address": address,
        "course": course
  }

  var arr = JSON.parse(localStorage.getItem("data"));
  arr["person"][index] = data;
  localStorage.setItem("data", JSON.stringify(arr));
}
