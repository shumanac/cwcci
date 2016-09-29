$(window).scroll(function () {
    if ($(window).scrollTop() > 920) {
        $('#myImage').show();

        $('#main-nav').css('top', '0px');

    } else {
        $('#myImage').hide();

        $('#main-nav').css('top', '100px');

    }
});