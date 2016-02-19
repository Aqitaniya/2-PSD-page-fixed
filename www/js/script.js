$(".heart").click(function () {
    if ($(this).attr("src") == "img/content/heart-red.png") {
        $(this).attr("src", "img/content/heart.png");
        var current = +$(this).parent().find(".heart-col").html();
        $(this).parent().find(".heart-col").html(current - 1);
        $(this).parent().find(".heart-col").css('color', '#6c6c6c')
    } else {
        $(this).attr("src", "img/content/heart-red.png");
        var current = +$(this).parent().find(".heart-col").html();
        $(this).parent().find(".heart-col").html(current + 1);
        $(this).parent().find(".heart-col").css('color', '#a95f5f');
    }
});

$('.carousel')
    .on('jcarousel:createend', function () {
        $(this).jcarousel('scroll', 1, false);
    })
    .jcarousel();

$(function () {
    $(".pagination").pagination({
        items: 370,
        itemsOnPage: 10,
        displayedPages: 10,
        edges: 1,
        currentPage: 6,
        prevText: '<i class="fa fa-chevron-left fa-lg"></i>',
        nextText: '<i class="fa fa-chevron-right fa-lg"></i>',
        cssStyle: 'light-theme'
    });
});

$(function () {
    var elem = $('.prev').html($('.prev').clone()).html();
    $('.prev').remove();
    $(".next").before(elem);
})

VK.Widgets.Group("vk_groups", {
    mode: 0,
    width: "320",
    height: "310",
    color1: 'ffffff',
    color2: '45688e',
    color3: '45688e'
}, 31613044);

