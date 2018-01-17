$(document).ready(function () {
    _AlturaTela = $(window).height();
    $(window).scroll(function () {
        if ($(window).scrollTop() > _AlturaTela) {
            $('.logo-title').css('color', '#000');
        } else {
            $('.logo-title').css('color', '#fff');
        }
    })
    $(window).resize(function () {
        _AlturaTela = $(window).height();
    })
});