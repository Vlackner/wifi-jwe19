// Prüfen ob Geschlecht ausgewählt
$("input[type=radio]").each(function() {
  if ($(this).attr("checked") == "checked") {
    $('.gender_ratio').addClass('valide');
    $('.gender_ratio').removeClass('invalide');
  } else {
    $('.gender_ratio').removeClass('valide');
    $('.gender_ratio').addClass('invalide');
  }
  checkvalide()
});

// Nachname und Vorname prüfen
$('.personID').on('click keyup',function() {
  var personVar = $(this);
  var correct = 0;

  if (personVar.val().length > 0 && personVar.val().match(/[A-z]/) && personVar.val().match(/[A-Z]/)) {
    correct++;
  }
  if (personVar.val().match(/[!@#$%\^&*(){}[\]<>?/|\-+]/) || personVar.val().match(/\d/)){
    correct == 0;
  }
  if (correct == 1) {
    $(this).addClass('valide');
    $(this).removeClass('invalide');
  } else {
    $(this).removeClass('valide');
    $(this).addClass('invalide');
  }
  checkvalide()
});

// E-Mail Adresse prüfen
$('#emailadress').on('click keyup', function(){
  var adressinput = $(this).val();
  var regexadress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(regexadress.test(adressinput)){
    $('#emailadress').addClass('valide');
    $('#emailadress').removeClass('invalide');
  } else {
    $('#emailadress').removeClass('valide');
    $('#emailadress').addClass('invalide');
  }
  checkvalide()
});

// Passwort überprüfen, ob es Sonderzeichen und der gleichen beinhaltet
$('.kb_passwort').keyup(function(){
    var pw = $(this);
    var correct1= 0;

  if(pw.val().length >= 8){
    correct1++
  }
  if (pw.val().match(/[A-z]/)) {
    correct1++;
  }
  if (pw.val().match(/[A-Z]/)) {
    correct1++;
  }
  if (pw.val().match(/[!@#$%\^&*(){}[\]<>?/|\-+]/)) {
    correct1++;
  }
  if (pw.val().match(/\d/)) {
    correct1++;
  }
  if (correct1 == 5) {
    $(this).addClass('valide');
    $(this).removeClass('invalide');
  } else {
    $(this).removeClass('valide');
    $(this).addClass('invalide');
  }
  checkvalide()
});

// Passwort Wiederholung muss ident Sonderzeichen
  $('.kb_passwort').keyup(function () {
      var originalPW = $('#passwortID').val();
      var repeatPW   = $('#passwortID2').val();

    if (originalPW === repeatPW && originalPW != "" ) {
      setValide($('.kb-passwort'))
    } else {
      setInvalide($('.kb-passwort'));
    }
    checkvalide()
  });


function setValide(selector) {
    selector.addClass('valide');
    selector.removeClass('invalide');
  }

  function setInvalide(selector) {
    selector.addClass('invalide');
    selector.removeClass('valide');
  }

// Funktion, die den Button aktiviert, wenn alles valide ist

function checkvalide(){
  var countValide = 1;

  $('.form_fields input').each(function(){
    if($(this).hasClass('valide')) {
    countValide++
  }
});
  console.log(countValide);
  console.log($('.form_fields input').length);

  if(countValide == $('.form_fields input').length -1){
    $('.btn-send').removeAttr('disabled')
  } else {
    $('.btn-send').attr('disabled')
  }
};
