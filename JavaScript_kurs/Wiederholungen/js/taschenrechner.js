
var $calc = $('.calculation');

$('.button.calc-btn').click(function () {
   var clickedButton = $(this);
   $calc.val($calc.val() + clickedButton.val());
});

$('.button.enter-btn').click(function () {
  $calc.val(eval($calc.val()));
});

$('.button.clear-btn').click(function () {
  var clear = $(this);
  if (clear) {
    $calc.val('');
  }
});

$('.button.return-btn').click(function () {
  var expr = $calc.val();
  $calc.val(expr.substr(0, expr.length-1));
});
