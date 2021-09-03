
// elementos com as classes animadas :)
var $target = [
    $('.anime-top'),
    $('.anime-left'),
    $('.anime-right')
];

// anima os elementos quando aparecem
function animeScrool() {
    var documentTop = $(document).scrollTop();
    var offset = $(window).height() * 3 / 4;
    
    for (let i = 0; i < $target.length; i++) {
        $target[i].each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) $(this).addClass('anime-start');
            else $(this).removeClass('anime-start');
        });
    }
}

$(document).scroll(() => animeScrool());