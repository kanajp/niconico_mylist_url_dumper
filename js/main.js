$(function() {
    setTimeout(function() {
        var my = '';
        var other = '';

        // URLを取得
        $('h5').each(function() {
            my += 'http://www.nicovideo.jp' + $(this).children('a').attr('href') + '\n';
        });
        $('.font16').each(function() {
            other += 'http://www.nicovideo.jp' + $(this).children('a').attr('href') + '\n';
        });

        if(my != '') {
            console.log('\n\n%s', my);
        }
        if(other != '') {
            console.log('\n\n%s', other);
        }
    }, 2000);
});
