$(document).ready(function() {
    $('a[href^="#"]').bind('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 900, 'swing');
    });
});