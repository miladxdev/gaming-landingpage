// show and hide navbar menu on phone
function dropMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// ---Carousel -------------------->
let slideIndex = 0;
showSlides();

// Next/previous controll
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = initial; // reset timer
}
function prevSlide() {
  slideIndex--;
  showSlides();
  timer = initial; // reset timer
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = initial; // reset timer
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[slideIndex].classList.add("active");
}

// autoplay slides
let timer = 4;
let initial = timer;

setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = initial;
  }
}, 1000);

/*
$(document).ready(function () {
  $(".poster-container").owlCarousel({
    // autoplay: true,
    // loop: true,
    // items: 4,
    margin: 5,
    // center: true,
    dots: false,
    // responsive: {
    //        0: {
    //            items: 1
    //        },
    //        600: {
    //            items: 3
    //        },
    //        1000: {
    //            items: 5
    //        }
    //    }
  });
});

*/
