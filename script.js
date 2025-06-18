$(function(){
    $(window).on('scroll load', function () {
        $('.product-list li img').each(function () {
          if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 50) {
            $(this).addClass('show');
          }
        });
      });

      $('.burger').click(function(){
        $('.menu').toggleClass('is-active');
        $('.bg-black').toggleClass('is-active');
      });
      
      $('.close-btn').click(function () {
        $('.menu, .bg-black').removeClass('is-active');
      });
});
