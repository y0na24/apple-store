$(function () {
  $(".header__slider").slick({
    dots: true,
    arrows: true,
    
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  
    
  })
  // $(window).on('scroll', function(){
  
  //   if ($(window).scrollTop() > 0){
  //     $('.burger').addClass('burger--follow')
  //   }else{
  //     $('.burger').removeClass('burger--follow')
  //   }
  // })
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open')===false){
      $('.burger').addClass('burger--follow')
    }else{
      $('.burger').removeClass('burger--follow')
    }
  }, 0);
  
  $('.burger, .overlay' ).on('click', function(e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--open')
  })

})
