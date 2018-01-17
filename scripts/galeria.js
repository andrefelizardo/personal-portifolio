// portfolio
 $('.galeria ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.galeria ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .galeria ul').removeClass('item_open');
     $('html, body').css('overflow-y', 'visible');
     return false;
 });

 $(".galeria ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($(".galeria").offset().top)
     }, 400);
     $('html, body').css('overflow-y', 'hidden');
 });