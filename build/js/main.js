// hey
console.log('hey');

(function($) {
    $('.js-nav-menu-toggle').on('click', function() {
        $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
    });

    $('html').on('click', function(e) {
        if(!$(e.target).closest('.js-nav-menu').length &&
            ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
            $('.js-nav-menu').removeClass('navigation-menu--open');
        }
    });
})(jQuery);
var navigation = {
    // Variables
    $nav: document.querySelector('.nav'),
    $navTrigger: document.querySelector('.nav__trigger'),
    $navContent: document.querySelector('.nav__content'),
    $navList: document.querySelector('.nav__list'),
    transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',

    init() {
        var self = this;

        // Handle the transitions
        self.$navTrigger.addEventListener('click', function() {
            if (!self.$navTrigger.classList.contains('is-active')) {
                // .nav--trigger active
                self.$navTrigger.classList.add('is-active');

                // .nav active
                if (!self.$nav.classList.contains('is-active')) {
                    self.$nav.classList.add('is-active');
                    self.$nav.addEventListener('transitionend', function(e) {
                        if (e.propertyName == 'width' && self.$navTrigger.classList.contains('is-active')) {
                            // .nav__content active
                            self.$navContent.classList.add('is-active');
                        }
                    });
                } else {
                    self.$navContent.classList.add('is-active');
                }

                // no-csstransitions fallback
                if (document.documentElement.classList.contains('no-csstransitions')) {
                    self.$navContent.classList.add('is-active');
                }
            } else {
                // .nav--trigger inactive
                self.$navTrigger.classList.remove('is-active');

                // .nav__content inactive
                if (self.$navContent.classList.contains('is-active')) {
                    self.$navContent.classList.remove('is-active');
                    self.$navContent.addEventListener('transitionend', function(e) {
                        if (e.propertyName == 'opacity' && !self.$navTrigger.classList.contains('is-active')) {
                            // .nav inactive
                            self.$nav.classList.remove('is-active');
                        }
                    });
                } else {
                    self.$nav.classList.remove('is-active');
                }

                // no-csstransitions fallback
                if (document.documentElement.classList.contains('no-csstransitions')) {
                    self.$nav.classList.remove('is-active');
                }
            }
        });
    }
}

navigation.init();

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

// 'use strict';
// (function() {
//     const vnavText = document.querySelector('.vnav .text');
//
//     if (!vnavText) {
//         return;
//     }
//
//
//
//
// })();
