$(document).ready(function(){
    $(".mb_nav_list_dep2").hide();
    $(".mb_nav_list > .mb_nav_item").click(function(){
        $(".mb_nav_list_dep2").slideUp(400);
        $(this).children(".mb_nav_list_dep2").stop().slideToggle(400);
    });
    $('.mb_nav_item').click(function(){
        $('.mb_nav_item').removeClass('on');
       $(this).addClass('on');
    })
$('.close').click(function(){
    $('header').removeClass('show');
})
});