/*$('.block-red').hide('slow','swing');

$('.block-red').show('slow','swing');

$('.block-red').fadeOut('slow');

$('.block-red').fadeIn('slow');

$('.block-red').fadeTo('slow', 0.5); */

$('.ausblenden').click(function () {
  $('.block-red').removeClass('animate');
  $('.block-red').hide();
})

$('.einbleden').click(function () {
  $('.block-red').removeClass('animate');
  $('.block-red').show();
})

$('.ausblenden_animiert').click(function() {
  $('.block-red').removeClass('animate');
  $('.block-red').hide('slow','swing');
  $('.block-red').fadeIn('slow');
})

$('.einbleden_animiert').click(function() {
  $('.block-red').removeClass('animate');
  $('.block-red').fadeOut('slow');
  $('.block-red').show('slow','swing');
})

$('.schattieren').click(function (){
  $('.block-red').removeClass('animate');
  $('.block-red').fadeTo('slow', 0.5);
  $('.block-red').fadeTo('slow', 1);
})

$('.slide').click(function () {
  $('.block-red').removeClass('animate');
  $('.block-red').slideUp();
})

/* $('.animieren').click(function () {
  $('.block-red').addClass('animate');
}) */

$('.animieren').click(function () {
  $('.block-red').animate({
    left: '250px',
    height: '40rem',
    width: '50rem'
  });
})
