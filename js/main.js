$(function(){
    var prefix = '>play '
    var movie_url = [];

    // URLを取得
    $('h5').each(function() {
        movie_url.push(('http://www.nicovideo.jp' + $(this).children('a').attr('href')));
    });

    var dump = '';
    for(var i = 0; i < movie_url.length; i++) {
        dump += prefix + movie_url[i] + '\n';
    }

    console.log(dump);
});
