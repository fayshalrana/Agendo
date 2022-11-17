$(function(){
  $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
          $('#btn_hide').addClass('btn_show');
      } else {
          $('#btn_hide').removeClass('btn_show');
      }
  });
})

// slick slider function 
$('.slick_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay:true,
  });






  $(function(){
    lightbox.option({
      'resizeDuration': 10,
      'wrapAround': false,
      'albumLabel':false,
      'fadeDuration': 100,
      'maxWidth': 700,
      'positionFromTop': 300,
      'maxHeight': 800

    });
    
  })


  // nav-bar close in responsive mode 
$(function(){
  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });
})


window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
  anime({
    targets: '.team_item',


  });
}

