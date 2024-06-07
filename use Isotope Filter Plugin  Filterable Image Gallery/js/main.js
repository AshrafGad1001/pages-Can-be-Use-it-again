$('.items').isotope({
    itemSelector: '.item',
    layoutMode:'fitRows'
});

$('.menu ul li').click(function () {
    $('.menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-fliter');
    // console.log(selector);
    $('.items').isotope({
        filter: selector
    });
    return false;
});