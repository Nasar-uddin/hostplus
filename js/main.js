document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    // var carousel = document.querySelectorAll('.carousel');
    // var carouselInit = M.Carousel.init(carousel,{
    //   fullWidth: true
    // });
    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });
    $('.tabs').tabs();
  });