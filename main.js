$('.open-popup').click(function(e){
    e.preventDefault();
    $('.popup-bg').fadeIn(400);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function(e){
    e.preventDefault();
    $('.popup-bg').fadeOut(300);
    $('.popup-bg').addClass('close');
    $('html').addClass('yes-scroll')
});

$('ul').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });