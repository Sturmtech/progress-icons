$.fn.progressIcons = function(options) {

    var element = $(this), total, children = element.children().length;

    var settings = $.extend({
        color: 'blue',
        delay: 200,
        shadows: 0,
        total: 0,
    }, options );

    total = settings.total - children;

    for(var i = 1; i <= total; i++){
        $(':nth-child(' + (i) + ')', this).clone().appendTo(element);
    }

    $(this).waypoint(function() {

        var paint = function(c) {
            if(c > settings.shadows){
                return false;
            }

            setTimeout(function () {
                $(':nth-child(' + (c) + ')', element).css('color', settings.color);
                paint(++c);
            }, settings.delay);
        }

        paint(1);

        this.destroy();
    }, {
        offset: '100%'
    });
}