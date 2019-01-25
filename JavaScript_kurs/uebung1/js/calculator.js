/*$('input[type="button"]').click(function () {
  $('input.calc').val(
    $('input.calc').val() + this.value
  )
}
)*/

$('input').on('keyup', function () {
  if($('.calc').val() != $('.calc').val($('.calc').val()+$(this).val()))
    $('.calc').val('');
});

$('input.number-btn').on('click', function () {
    if($(this).attr('input') != '.operator') {
        $('.calc').val($('.calc').val()+$(this).val());
    }
   else {
     if($('.calc').val()!='') {
       $('.calc').val($('.calc').val()+$(this).val());
     }
   }
});

$('input.operator').on('click', function () {
    if($(this).attr('input') != '.number-btn') {
        $('.calc').val($('.calc').val()+$(this).val());
    }
   else {
     if($('.calc').val()!='') {
       $('.calc').val($('.calc').val()+$(this).val());
     }
   }
});

$('input.empty').on('click', function () {
  $('.calc').val('');
});

$('input.value').on('click', function () {
  var ergebnis = $('.calc').val();
  $('.calc').val(eval(ergebnis));
});

$('.back-btn').on('click' , function () {
  var ergebnis = $('.calc').val();
  $('.calc').val(ergebnis.substr(0, ergebnis.length-1));
});
