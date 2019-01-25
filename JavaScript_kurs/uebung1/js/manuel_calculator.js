$('input').on({
  'keyup' : function () {
      if($('.screen').val() != $('.screen').val($('.screen').val()+$(this).val()))
        $('.screen').val('');
      },
  'click' : function () {
    if ($(this).hasClass('insert')) {
        $('.screen').val($('.screen').val()+$(this).val());
      }
    else if ($(this).hasClass('btn-clean')) {
        $('.screen').val('');
    }
    else if ($(this).hasClass('btn-equal')) {
      var ergebnis = $('.screen').val();
      $('.screen').val(eval(ergebnis));
    }
    else {
      if($(this).hasClass('btn-back')) {
      var ergebnis = $('.screen').val();
      $('.screen').val(ergebnis.substr(0, ergebnis.length-1));
      }
    }
  }
});

/* $('input.button insert').on('click', function () {
    if($(this).attr('input') != '.button insert') {
        $('.screen').val($('.screen').val()+$(this).val());
    }
   else {
     if($('.screen').val()!='') {
       $('.screen').val($('.screen').val()+$(this).val());
     }
   }
});

$('.button.btn-clean').on('click', function () {
  $('.screen').val('');
});

$('.button.btn-equal').on('click', function () {
  var ergebnis = $('.screen').val();
  $('.screen').val(eval(ergebnis));
});

$('.button.btn-back').on('click' , function () {
  var ergebnis = $('.screen').val();
  $('.screen').val(ergebnis.substr(0, ergebnis.length-1));
}); */
