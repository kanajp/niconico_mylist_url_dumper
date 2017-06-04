$(function(){
    $('h5').each(function(i) {
        console.log('http://www.nicovideo.jp' + $(this).children('a').attr('href'));
    });
});
