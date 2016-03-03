define(['lib/news_special/bootstrap', 'utils'], function (news, utils) {
    var sectionElements = {
        'death': { element: news.$('.death-ticker'), reached: false },
        'population': { element: news.$('.population'), reached: false },
        'price_of_food': { element: news.$('.priceoffood'), reached: false }
    };

    var init = function () {
        news.$(window).on('optimisedScroll', handleScroll);
    };

    var handleScroll = function () {
        for (var key in sectionElements) {
            if (utils.isElementInViewport(sectionElements[key].element)) {
                if (!sectionElements[key].reached) {
                    sectionElements[key].reached = true;
                    news.pubsub.emit('section-' + key + '-reached');
                }
            }
        }
    };

    return {
        init: init
    };
});
