$(document).ready(function () {
    
    $('.menu>li>a').click(function(event){
        event.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
    });

    lightbox.option({
        'resizeDuration': 1500,
        'wrapAround': true
    });
    $('.top a').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('form').click(function(event){
        $('form').toggleClass('animate__animated animate__bounce');
        



    });
    
});

