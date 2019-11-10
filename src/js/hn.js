// Google Web Font API
//kskks
//kskk
WebFontConfig = {
    google: { families: [ 'Open+Sans::latin' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

// Custom jQuery
var parent = $("#mobile-nav").children('ul').children('li');

function postloadFunc() {
    $(parent).find('ul').addClass('dropdown');
    $('.dropdown').parent('li').addClass('parent');
}

postloadFunc();

$(parent).on('mouseenter', function (event) {
    event.preventDefault();
    $(this).removeClass('closed');
    $(this).children('a').addClass('hovered');
});

$(parent).on('mouseleave', function(event) {
    event.preventDefault();
    $(this).addClass('closed');
    $(parent).children('a').removeClass('hovered');
});
