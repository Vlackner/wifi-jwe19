console.log('Dokument lädt');

/*$(document).ready(function() {
  console.log('Dokument fertig geladen');
  $('button').click(function() {
  console.log('Bitte!!');

// Eigenschaft des Button aus dem CSS verändern - DOM Manipulation
    $(this).css({
    'width': '300px'
  });

// Eine Classe dem Element hinzufügen --> Toggle Klick nach unten
// Nochmal Klick, dann nach oben
    $(this).toggleClass('run'); */

$(document).ready(function() {

    function timeout() {
      window.setTimeout(function() {
      $('button').removeClass('sending');
      $('button').text('gesendet');
      $('button').removeAttr('disabled');
      }, 3000);
    }

    $('button').click(function() {
    console.log('Bitte!!');
    $(this).addClass('sending');
    $(this).text('wird gesendet');
    $(this).attr('disabled', true);
    timeout();

});

});
