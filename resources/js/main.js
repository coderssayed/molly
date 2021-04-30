//swiper slider here
const swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
});
//mixit up js
var mixer = mixitup('.portfolio-item-area');
//menu here
function openMenu(){
  document.querySelector(".main-menu").style.display="block";
  document.querySelector(".open-icon").style.display="none";
  document.querySelector(".close-icon").style.display="block";
  
}
function closeMenu(){
  document.querySelector(".main-menu").style.display="none";
  document.querySelector(".open-icon").style.display="block";
  document.querySelector(".close-icon").style.display="none";
}
//wow js here
new WOW().init();
//scrolling effect here
$(".menu li a").on("click", function(){
  $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
  }, 1000);
});