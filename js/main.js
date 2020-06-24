// slick+slide
$(function(){
  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
  });
  $('.about__item-img').slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.design-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.header-btn').on('click', function(){
    $('.menu').addClass('active');
  });
  $('.close-btn').on('click', function(){
    $('.menu').removeClass('active');
  });
});

//wow effect

new WOW().init();

function countup(about){
  var countBlockTop = $(".about-top").offset().top;
  var windowHeight = window.innerHeight;
  var show = true;

  $(window).scroll( function (){
    if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){
      show = false;

      $('.about__item-num').spincrement({
        duration: 2000,
        fade:true,
      });
    }
  })
}

$(function() {
  countup("count", $(".count").text());
  countup("count2", $(".count2").text());
});
