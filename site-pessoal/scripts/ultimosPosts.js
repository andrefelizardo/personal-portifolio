$(document).ready(function(){
    $.get( "http://www.andrefelizardo.com.br/blog/feed/", function( data ) {
        for(i = 0; i < 3; i++) {
            var titulo = $(data).find('item').eq(i).find('title').text();
            var url = $(data).find('item').eq(i).find('link').text();
            $("<li><a href='" + url + "' target='_blank'>" + titulo + "</a>").appendTo($('#ultimos-posts ul'));
        }
      })
      .done(function(){
        $('#ultimos-posts').slideToggle();
      })
      .fail(function() {

      })
      .always(function() {
          $('.loadPosts').hide();
      });
});