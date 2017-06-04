$(function() {
    setTimeout(function() {
        var movie_url = [];

        // URLを取得
        $('h5').each(function() {
            movie_url.push(('http://www.nicovideo.jp' + $(this).children('a').attr('href')));
        });

        var dump = '';
        for(var i = 0; i < movie_url.length; i++) {
            dump += movie_url[i] + '\n';
        }

        console.log(dump);
    }, 2000);
});
