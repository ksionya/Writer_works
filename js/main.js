function phoneMask() {
    $('.phone').mask('+38(099) 999-99-99');
}


function mobileMenu() {

    $('.burger').on('click', function() {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('active');
        $('body').toggleClass('js-noscroll');
    });

    $('body').on('click', function(e) {

        if ($(e.target).hasClass('header-nav')) {
          $('.burger').removeClass('active');
            $('.header-nav').removeClass('active');
          $('body').removeClass('js-noscroll');
        }

    })
};






// Анимация WOW
var wow = new WOW({
    mobile: false,

});
wow.init();

$(document).ready(function() {
    phoneMask();
    mobileMenu();
});
