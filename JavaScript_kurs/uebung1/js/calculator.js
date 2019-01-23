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

$('input.number').on('click', function () {
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
    if($(this).attr('input') != '.number') {
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
