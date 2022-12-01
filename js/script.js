$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $("nav").addClass("boxshadow");
    } else {
        $("nav").removeClass("boxshadow");
    }
});


$('.single-item').slick({
	dots: true
});


