$(document).ready(function(){$.get("http://www.andrefelizardo.com.br/blog/feed/",function(t){for(i=0;i<3;i++){var e=$(t).find("item").eq(i).find("title").text(),n=$(t).find("item").eq(i).find("link").text();$("<li><a href='"+n+"' target='_blank'>"+e+"</a>").appendTo($("#ultimos-posts ul"))}}).done(function(){$("#ultimos-posts").slideToggle()}).fail(function(){}).always(function(){$(".loadPosts").hide()})});