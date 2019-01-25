//let wertDesFeldes = $('input').val();

//let wertDesFeldes = $('input').attr('value');

/* Inhalt zwischen zwei Tags auslesen */
//let wertDesFeldes = $('p').text(); -->liest den Text dazwischen aus

//let wertDesFeldes = $('p').html();

// parseInt wandelt mir meine Daten in ganze Zahlen um
    /* let zahl1 = parseInt($('.zahl1').val());
    let zahl2 = parseInt($('.zahl2').val());

    $('.ergebnis').val( eval(zahl1 + zahl2 ));

// oder auch möglich
   let zahl1 =  $('.zahl1').val();
   let zahl2 =  $('.zahl2').val();
   $('.ergebnis').val(zahl1 + '+' + zahl2 );

    let zahl3 = $('.zahl3').val();
    let zahl4 = $('.zahl4').val();

    $('.ergebnis1').val(zahl1 + '+' + zahl2 + '+' + zahl3 + '+' + zahl4); */

/* Vielzahl an Buttons, dann brauche ich eine
Variable wenn ich eine Verschachtelung in einer Funktion habe */
$('.number-btn').click(function() {
  var current = $(this);
  $('.ergebnis').val(current.val());
});

// um Daten rückgängig zu machen
$('.back-btn').click(function() {
  var aktuellesErgebnis = $('.ergebnis').val();
  $('.ergebnis').val(aktuellesErgebnis.substr(0, aktuellesErgebnis.length-1));
});
