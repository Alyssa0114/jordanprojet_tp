// SLIDER

(function ($) {

    $(document).ready(function () {

        var s = $('.slider'),
            sWrapper = s.find('.slider-wrapper'),
            sItem = s.find('.slide'),
            btn = s.find('.slider-link'),
            sWidth = sItem.width(),
            sCount = sItem.length,
            slide_date = s.find('.slide-date'),
            slide_title = s.find('.slide-title'),
            slide_text = s.find('.slide-text'),
            slide_more = s.find('.slide-more'),
            slide_image = s.find('.slide-image img'),
            sTotalWidth = sCount * sWidth;

        sWrapper.css('width', sTotalWidth);
        sWrapper.css('width', sTotalWidth);

        var clickCount = 0;

        btn.on('click', function (e) {
            e.preventDefault();

            if ($(this).hasClass('next')) {

                (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
            } else if ($(this).hasClass('prev')) {

                (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
            }
            TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) })


            //CONTENT ANIMATIONS

            var fromProperties = { autoAlpha: 0, x: '-50', y: '-10' };
            var toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

            TweenLite.fromTo(slide_image, 1, { autoAlpha: 0, y: '40' }, { autoAlpha: 1, y: '0' });
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

        });

    });
})(jQuery);

$('.overlay').addClass('overlay-blue');

// AVENIR CONTENT

$(document).ready(function () {
    var animTime = 300,
        clickPolice = false;

    $(document).on('touchstart click', '.acc-btn', function () {
        if (!clickPolice) {
            clickPolice = true;

            var currIndex = $(this).index('.acc-btn'),
                targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();

            $('.acc-btn h1').removeClass('selected');
            $(this).find('h1').addClass('selected');

            $('.acc-content').stop().animate({ height: 0 }, animTime);
            $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

            setTimeout(function () { clickPolice = false; }, animTime);
        }

    });

});
