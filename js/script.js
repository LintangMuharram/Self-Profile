
$('.page-scroll').on('click', function(){

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    // Pindahkan Scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 750, 'swing');

});