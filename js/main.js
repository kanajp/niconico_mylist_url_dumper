$(function() {
    setTimeout(function() {
        var dump = '';

        // URLを取得
        $('h5').each(function() {
            dump += 'http://www.nicovideo.jp' + $(this).children('a').attr('href') + '\n';
        });

        console.log('\n\n%s', dump);
    }, 2000);
});
