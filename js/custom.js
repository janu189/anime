$(document).ready(function () {

    // responsive menu start

    $('.mob_main_menu, .mob_sub_menu').hide();

    $('.toggle_icon').click(function () {
        $('.mob_main_menu').slideToggle()
        $(this).find('i').toggleClass('fa-bars fa-times');
    })
    $('.mob_main_menu > li > a').click(function () {
        $(this).next('.mob_sub_menu').slideToggle();
    })


    // slider js start

    $("#slider").owlCarousel(
        {
            items: 1,
            loop: true,
            nav: true,
            navElement: 'span',
            navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 3000,
        }
    );

    new WOW().init();

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    });

    // page-up-icon js start
    
    $('.page-up-icon').click(function(){
        $('html , body').scrollTop(0);
    })

    // page-loader js start

    setTimeout(() => {
        $('.page-loader').fadeOut(500);
    },1500);

})
