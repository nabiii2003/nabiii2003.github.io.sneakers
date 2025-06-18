$(function(){
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 100){
            $('#totop').fadeIn();
        }else {
            $('#totop').fadeOut();
        }
    });

    $('#totop').on('click',function(e){
       e.preventDefault();
       $('html,body').animate({ scrollTop: 0 }, 600);
    });

    $('.burger').click(function(){
        $('.bk').toggleClass('is-active');
        $('.menu').toggleClass('is-active');
        $('.burger').toggleClass('is-active');
    });

});
